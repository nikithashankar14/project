import { useAuth } from '../context/AuthContext';
import { User, Mail, Globe, Shield } from 'lucide-react';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ marginBottom: '2rem' }}>My Profile</h1>
            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={50} color="white" /></div>
                    <div><h2>{user?.username}</h2><p style={{ color: 'var(--text-muted)' }}>Level 12 Learner</p></div>
                </div>
                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem', display: 'grid', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Mail size={20} color="var(--primary)" /><div><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Address</p><p>{user?.email}</p></div></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Globe size={20} color="var(--secondary)" /><div><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Primary Language</p><p>Spanish</p></div></div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}><Shield size={20} color="#ce82ff" /><div><p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Account Status</p><p>Premium Member</p></div></div>
                </div>
                <button className="gradient-btn" style={{ marginTop: '1rem' }}>Edit Profile</button>
            </div>
        </div>
    );
};
export default Profile;
