import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '2rem', textAlign: 'center', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
            >
                Master Languages with <span style={{ color: 'var(--primary)' }}>AI</span>
            </motion.h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
                The next generation of language learning. Immersive, AI-powered, and beautifully designed.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <button className="gradient-btn" onClick={() => navigate('/register')}>Get Started</button>
                <button className="glass-card" style={{ padding: '12px 24px', cursor: 'pointer' }} onClick={() => navigate('/login')}>Sign In</button>
            </div>
        </div>
    );
};

export default Landing;
