CREATE DATABASE IF NOT EXISTS language_learning_buddy;
USE language_learning_buddy;

-- Users Table
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Languages Table
CREATE TABLE IF NOT EXISTS Languages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    code VARCHAR(10) NOT NULL UNIQUE -- e.g., 'es', 'fr', 'de'
);

-- Lessons Table
CREATE TABLE IF NOT EXISTS Lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    language_id INT,
    title VARCHAR(255) NOT NULL,
    type ENUM('vocabulary', 'grammar') NOT NULL,
    FOREIGN KEY (language_id) REFERENCES Languages(id) ON DELETE CASCADE
);

-- Vocabulary Table
CREATE TABLE IF NOT EXISTS Vocabulary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT,
    word VARCHAR(255) NOT NULL,
    meaning TEXT NOT NULL,
    example_sentence TEXT,
    FOREIGN KEY (lesson_id) REFERENCES Lessons(id) ON DELETE CASCADE
);

-- Quizzes Table
CREATE TABLE IF NOT EXISTS Quizzes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT,
    question TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_option CHAR(1) NOT NULL,
    FOREIGN KEY (lesson_id) REFERENCES Lessons(id) ON DELETE CASCADE
);

-- UserProgress Table
CREATE TABLE IF NOT EXISTS UserProgress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    lesson_id INT,
    status ENUM('in_progress', 'completed') DEFAULT 'in_progress',
    score INT DEFAULT 0,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES Lessons(id) ON DELETE CASCADE
);

-- ChatHistory Table
CREATE TABLE IF NOT EXISTS ChatHistory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    sender ENUM('user', 'ai') NOT NULL,
    message TEXT NOT NULL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

-- Seed Initial Languages
INSERT IGNORE INTO Languages (name, code) VALUES ('Spanish', 'es'), ('French', 'fr'), ('German', 'de');
