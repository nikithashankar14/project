const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/vocabulary', authMiddleware, lessonController.getVocabulary);
router.get('/quizzes', authMiddleware, lessonController.getQuizzes);

module.exports = router;
