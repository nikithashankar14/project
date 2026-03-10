const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        console.log('Attempting to register user:', { username, email });

        const [existingUser] = await pool.execute('SELECT * FROM Users WHERE email = ?', [email]);

        if (existingUser.length > 0) {
            console.log('User already exists:', email);
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.execute('INSERT INTO Users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);

        console.log('User registered successfully:', email);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration Error Details:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('Attempting login for:', email);

        const [users] = await pool.execute('SELECT * FROM Users WHERE email = ?', [email]);

        if (users.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { id: user.id, username: user.username, email: user.email } });
    } catch (error) {
        console.error('Login Error Details:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
