import React, { useEffect, useState } from "react";
import P1 from './P1.jpeg';
import P2 from './P2.jpeg';

export default function Work() {
    const [imageIndex, setImageIndex] = useState(0);
    const images = [P1, P2];

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [images.length]);

    const backgroundImageStyle = {
        width: "100vw",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${images[imageIndex]})`
    };

    return (
        <div style={backgroundImageStyle}>
            {/* Other content can go here if needed */}
        </div>
    );
}
