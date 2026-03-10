import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, BookOpen, MessageSquare, Mic, HelpCircle, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: BookOpen, label: 'Vocabulary', path: '/vocabulary' },
        { icon: MessageSquare, label: 'AI Chat', path: '/chat' },
        { icon: Mic, label: 'Pronunciation', path: '/pronunciation' },
        { icon: HelpCircle, label: 'Quiz', path: '/quiz' },
        { icon: User, label: 'Profile', path: '/profile' },
    ];

    return (
        <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            style={{ width: '250px', height: '100vh', padding: '2rem', borderRight: '1px solid var(--glass-border)', background: 'var(--bg-dark)', position: 'fixed' }}
        >
            <h2 style={{ color: 'var(--primary)', marginBottom: '2rem' }}>LearningBuddy</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {menuItems.map((item) => (
                    <div
                        key={item.label}
                        onClick={() => navigate(item.path)}
                        style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '12px', borderRadius: '12px', cursor: 'pointer', transition: 'background 0.2s' }}
                        className="sidebar-item"
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </div>
                ))}
                <div
                    onClick={logout}
                    style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '1rem', padding: '12px', borderRadius: '12px', cursor: 'pointer' }}
                >
                    <LogOut size={20} />
                    <span>Logout</span>
                </div>
            </div>
            <style>{`.sidebar-item:hover { background: rgba(255,255,255,0.05); color: var(--primary); }`}</style>
        </motion.div>
    );
};

export default Sidebar;
