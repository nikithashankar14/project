import { Book, Award, Zap, TrendingUp } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
    const { user } = useAuth();
    const stats = [
        { icon: Book, label: 'Lessons Done', value: '12', color: '#58cc02' },
        { icon: Award, label: 'Daily Streak', value: '5 Days', color: '#ff9600' },
        { icon: Zap, label: 'Exp Earned', value: '1,250', color: '#1cb0f6' },
        { icon: TrendingUp, label: 'Mastery', value: '68%', color: '#ce82ff' },
    ];

    return (
        <div style={{ maxWidth: '1200px' }}>
            <h1 style={{ marginBottom: '2rem' }}>Welcome back, {user?.username}! 👋</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {stats.map((stat) => (
                    <div key={stat.label} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ background: `${stat.color}20`, padding: '12px', borderRadius: '12px' }}>
                            <stat.icon color={stat.color} size={30} />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{stat.label}</p>
                            <h3 style={{ fontSize: '1.5rem' }}>{stat.value}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <h2 style={{ marginBottom: '1.5rem' }}>Continue Your Journey</h2>
            <div className="glass-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h3>Basics 1: Introduction</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Master common greetings and basic phrases.</p>
                </div>
                <button className="gradient-btn">Start Lesson</button>
            </div>
        </div>
    );
};

export default Dashboard;
