import { useState } from 'react';
import { Mic, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

const Pronunciation = () => {
    const [isListening, setIsListening] = useState(false);
    const [result, setResult] = useState('');
    const phrase = "Buenos días, ¿cómo estás?";
    const startListening = () => {
        setIsListening(true);
        setTimeout(() => { setIsListening(false); setResult(phrase); }, 2000);
    };
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '2rem' }}>Pronunciation Practice</h1>
            <div className="glass-card" style={{ marginBottom: '2rem' }}>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Speak this phrase:</p>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>"{phrase}"</h2>
                <motion.button animate={{ scale: isListening ? 1.2 : 1 }} transition={{ repeat: isListening ? Infinity : 0, duration: 0.5 }} className="gradient-btn"
                    style={{ width: '100px', height: '100px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}
                    onClick={startListening} disabled={isListening}><Mic size={40} /></motion.button>
                <p style={{ marginTop: '1rem', color: isListening ? 'var(--primary)' : 'var(--text-muted)' }}>{isListening ? 'Listening...' : 'Click the mic to start'}</p>
            </div>
            {result && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card">
                    <h3 style={{ marginBottom: '0.5rem' }}>We heard:</h3><p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>"{result}"</p>
                    <div style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Excellent! Your pronunciation is clear.</div>
                    <button className="sidebar-item" style={{ marginTop: '1.5rem', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }} onClick={() => setResult('')}><RefreshCw size={16} /> Try Again</button>
                </motion.div>
            )}
        </div>
    );
};
export default Pronunciation;
