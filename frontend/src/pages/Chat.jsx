import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Chat = () => {
    const [messages, setMessages] = useState([{ sender: 'ai', text: '¡Hola! Welcome to our Spanish practice. How can I help you today?' }]);
    const [input, setInput] = useState('');
    const chatEndRef = useRef(null);

    const scrollToBottom = () => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };
    useEffect(scrollToBottom, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: 'user', text: input }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { sender: 'ai', text: 'That sounds interesting! Let\'s continue practicing Spanish.' }]);
        }, 1000);
    };

    return (
        <div style={{ height: 'calc(100vh - 4rem)', display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ marginBottom: '1.5rem' }}>AI Conversation Practice</h1>
            <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', padding: '1rem' }}>
                <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingRight: '1rem' }}>
                    {messages.map((msg, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, x: msg.sender === 'user' ? 20 : -20 }} animate={{ opacity: 1, x: 0 }}
                            style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '70%', padding: '12px 16px', borderRadius: '15px', background: msg.sender === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.05)', color: 'white' }}>
                            {msg.text}
                        </motion.div>
                    ))}
                    <div ref={chatEndRef} />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem' }}>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder="Type your message in Spanish..."
                        style={{ flex: 1, padding: '12px', borderRadius: '10px', border: 'none', background: 'rgba(255,255,255,0.05)', color: 'white' }} />
                    <button className="gradient-btn" onClick={handleSend} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '12px' }}><Send size={20} /></button>
                </div>
            </div>
        </div>
    );
};

export default Chat;
