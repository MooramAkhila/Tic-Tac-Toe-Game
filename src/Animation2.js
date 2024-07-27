import React, { useState, useEffect } from 'react';
import './ani2.css';

export default function Ani2() {
 const [bottomPosition, setBottomPosition] = useState(0);
   // const step = 10;
    const containerHeight = 400;
    const [leftPosition, setLeftPosition] = useState(50); // Initial percentage position
    const step = 5; // Adjust step size as needed
    const containerWidth = 100; // Percentage width

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                setLeftPosition((prev) => Math.max(0, prev - step));
            } else if (event.key === 'ArrowRight') {
                setLeftPosition((prev) => Math.min(containerWidth, prev + step));
            }
            else  if (event.key === 'ArrowUp') {
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
            <div className="character" style={{ left: `${leftPosition}%`,
            bottom:`${bottomPosition}px` }}></div>
        </div>
    );
}

