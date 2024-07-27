import React, { useState } from 'react';
import img1 from './ak1.jpeg';
import img2 from './bg.jpg';

export default function Home() {
  const [images, setImages] = useState([]);

  const changeImage = (newImage) => {
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <>
      <button onClick={() => changeImage(img1)}>Change to Image 1</button>
      <button onClick={() => changeImage(img2)}>Change to Image 2</button>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Dynamic ${index}`} />
      ))}
    </>
  );
}
