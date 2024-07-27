//https://github.com/me50/MooramAkhila.git
import React, { useState, useEffect } from 'react';
import './ani.css';

export default function Ani() {
    const [bottomPosition, setBottomPosition] = useState(0);
    const step = 10;
    const containerHeight = 400;

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowUp') {
                setBottomPosition((prev) => Math.min(containerHeight - 50, prev + step));
            } else if (event.key === 'ArrowDown') {
                setBottomPosition((prev) => Math.max(0, prev - step));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className="container">
            <div className="character" style={{ bottom: `${bottomPosition}px` }}></div>
        </div>
    );
}

