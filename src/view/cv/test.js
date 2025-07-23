import React, { useState } from 'react';

function App() {
    const [input, setInput] = useState('Xin chào');
    const [output, setOutput] = useState('');

    const handleTranslate = async () => {
        const translated = await translateText(input);
        setOutput(translated);
    };

    const testTranslation = async () => {
        try {
            const res = await fetch('https://translate.argosopentech.com/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    q: "Xin chào",
                    source: "vi",
                    target: "en",
                    format: "text"
                })
            });
            const data = await res.json();
            console.log("Kết quả dịch:", data.translatedText);
        } catch (error) {
            console.error("Lỗi:", error);
        }
    };

    testTranslation();


    return (
        <div style={{ padding: 20 }}>
            <h2>Dịch tiếng Việt sang tiếng Anh (Free)</h2>
            <textarea
                rows="4"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ width: '100%' }}
            />
            <button onClick={handleTranslate} style={{ marginTop: 10 }}>
                Dịch
            </button>
            <p><strong>Kết quả:</strong> {output}</p>
        </div>
    );
}

export default App;
