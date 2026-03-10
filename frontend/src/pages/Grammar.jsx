const Grammar = () => {
    const topics = [{ title: 'Present Tense (Ar Verbs)', explanation: 'To conjugate regular -ar verbs in the present tense, remove the -ar and add the following endings:', rules: [{ person: 'Yo (I)', ending: '-o' }, { person: 'Tú (You)', ending: '-as' }, { person: 'Él/Ella/Ud (He/She)', ending: '-a' }, { person: 'Nosotros (We)', ending: '-amos' }], example: 'Hablar (To speak) -> Yo hablo, Tú hablas...' }];
    return (
        <div>
            <h1 style={{ marginBottom: '2rem' }}>Grammar Lessons</h1>
            {topics.map((topic) => (
                <div key={topic.title} className="glass-card" style={{ marginBottom: '2rem' }}>
                    <h2 style={{ color: 'var(--secondary)', marginBottom: '1rem' }}>{topic.title}</h2>
                    <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>{topic.explanation}</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                        {topic.rules.map((rule) => (
                            <div key={rule.person} style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '10px', textAlign: 'center' }}>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{rule.person}</p><h3 style={{ color: 'var(--primary)' }}>{rule.ending}</h3>
                            </div>
                        ))}
                    </div>
                    <div style={{ padding: '1rem', borderRadius: '10px', borderLeft: '4px solid var(--primary)', background: 'rgba(88, 204, 2, 0.1)' }}><strong>Example:</strong> {topic.example}</div>
                </div>
            ))}
        </div>
    );
};
export default Grammar;
