const pool = require('../config/db');

exports.getVocabulary = async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM Vocabulary');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching vocabulary', error: error.message });
    }
};

exports.getQuizzes = async (req, res) => {
    try {
        const [rows] = await pool.execute('SELECT * FROM Quizzes');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching quizzes', error: error.message });
    }
};
