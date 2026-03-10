const pool = require('../config/db');

exports.sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const userId = req.user.id;

        // Save user message
        await pool.execute('INSERT INTO ChatHistory (user_id, sender, message) VALUES (?, ?, ?)', [userId, 'user', message]);

        // Mock AI response
        const aiResponse = "That's very interesting! Tell me more about your day.";
        await pool.execute('INSERT INTO ChatHistory (user_id, sender, message) VALUES (?, ?, ?)', [userId, 'ai', aiResponse]);

        res.json({ response: aiResponse });
    } catch (error) {
        res.status(500).json({ message: 'Error in chat', error: error.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const userId = req.user.id;
        const [rows] = await pool.execute('SELECT * FROM ChatHistory WHERE user_id = ? ORDER BY timestamp ASC', [userId]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching history', error: error.message });
    }
};
