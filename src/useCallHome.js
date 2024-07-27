import React, { useState, useEffect, useCallback } from 'react';
import './Home.css'; // Import the CSS file
import p1 from './P1.jpeg'; // Import the image

export default function CallBack() {
  const [position, setPosition] = useState({ top: 50, left: 50 });

  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, top: prev.top - 10 }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, top: prev.top + 10 }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, left: prev.left - 10 }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, left: prev.left + 10 }));
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  

  return (
    <div className="block" style={{
     top: `${position.top}px`,
        left: `${position.left}px`,
        backgroundImage: `url(${p1})`
    }}>
    </div>
  );
}

