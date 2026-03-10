import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

const Quiz = () => {
    const questions = [
        { id: 1, q: "How do you say 'Water' in Spanish?", options: ["Agua", "Fuego", "Tierra", "Aire"], correct: "Agua" },
        { id: 2, q: "Translate 'Good morning' to Spanish.", options: ["Buenas noches", "Hola", "Buenos días", "Adiós"], correct: "Buenos días" },
        { id: 3, q: "Which word means 'Library'?", options: ["Librería", "Biblioteca", "Escuela", "Oficina"], correct: "Biblioteca" },
    ];

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const handleAnswer = (option) => {
        const isCorrect = option === questions[current].correct;
        setFeedback(isCorrect ? 'correct' : 'incorrect');
        if (isCorrect) setScore(score + 1);
        setTimeout(() => {
            setFeedback(null);
            if (current + 1 < questions.length) setCurrent(current + 1);
            else setShowResult(true);
        }, 1000);
    };

    if (showResult) return (
        <div style={{ textAlign: 'center', padding: '4rem' }}>
            <h1 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '1rem' }}>Quiz Finished!</h1>
            <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Your Score: {score} / {questions.length}</p>
            <button className="gradient-btn" onClick={() => window.location.reload()}>Try Again</button>
        </div>
    );

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}><span>Question {current + 1} of {questions.length}</span><span>Score: {score}</span></div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                    <motion.div initial={{ width: 0 }} animate={{ width: `${((current + 1) / questions.length) * 100}%` }} style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }} />
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div key={current} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="glass-card">
                    <h2 style={{ marginBottom: '2rem' }}>{questions[current].q}</h2>
                    <div style={{ display: 'grid', gap: '1rem' }}>
                        {questions[current].options.map((opt) => (
                            <button key={opt} className="sidebar-item" style={{ padding: '1rem', textAlign: 'left', border: '1px solid var(--glass-border)', borderRadius: '12px', background: feedback && opt === questions[current].correct ? 'rgba(88, 204, 2, 0.2)' : 'none', color: 'white', cursor: 'pointer' }}
                                onClick={() => !feedback && handleAnswer(opt)}>{opt}</button>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
            {feedback && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                    {feedback === 'correct' ? <CheckCircle color="var(--primary)" /> : <XCircle color="#ff4b4b" />}
                    <span style={{ fontSize: '1.2rem', color: feedback === 'correct' ? 'var(--primary)' : '#ff4b4b' }}>{feedback === 'correct' ? 'Great Job!' : 'Incorrect. The answer was ' + questions[current].correct}</span>
                </motion.div>
            )}
        </div>
    );
};

export default Quiz;
