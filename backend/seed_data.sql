USE language_learning_buddy;

-- Seed Initial Languages
INSERT IGNORE INTO Languages (name, code) VALUES ('Spanish', 'es'), ('French', 'fr'), ('German', 'de');

-- Seed a Spanish Lesson
INSERT IGNORE INTO Lessons (id, language_id, title, type) VALUES (1, 1, 'Basics 1', 'vocabulary');

-- Seed Vocabulary
INSERT IGNORE INTO Vocabulary (lesson_id, word, meaning, example_sentence) VALUES 
(1, 'Hola', 'Hello', '¡Hola! ¿Cómo estás?'),
(1, 'Gracias', 'Thank you', 'Muchas gracias por tu ayuda.'),
(1, 'Agua', 'Water', 'Quiero un vaso de agua.');

-- Seed Quizzes
INSERT IGNORE INTO Quizzes (lesson_id, question, option_a, option_b, option_c, option_d, correct_option) VALUES 
(1, "How do you say 'Water' in Spanish?", 'Agua', 'Fuego', 'Tierra', 'Aire', 'A'),
(1, "Translate 'Hello' to Spanish.", 'Adiós', 'Hola', 'Gracias', 'Por favor', 'B');
