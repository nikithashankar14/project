import { motion } from 'framer-motion';

const Vocabulary = () => {
    const words = [
        { word: 'Hola', meaning: 'Hello', example: '¡Hola! ¿Cómo estás?' },
        { word: 'Gracias', meaning: 'Thank you', example: 'Muchas gracias por tu ayuda.' },
        { word: 'Amigo', meaning: 'Friend', example: 'Él es mi mejor amigo.' },
        { word: 'Mañana', meaning: 'Tomorrow', example: 'Nos vemos mañana.' },
    ];

    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Spanish Vocabulary</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {words.map((item, index) => (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} key={item.word} className="glass-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                            <h2 style={{ color: 'var(--primary)' }}>{item.word}</h2>
                            <span style={{ fontSize: '0.9rem', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '6px' }}>Noun</span>
                        </div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.meaning}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>"{item.example}"</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Vocabulary;
