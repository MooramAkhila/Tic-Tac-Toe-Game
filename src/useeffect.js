//change the effect of the page 
// inline function a is function it is called inbuilt function 
import React, { useState, useEffect } from 'react';

export default function Hook2() {
  const [bgColor, setBgColor] = useState("#ffffff");
  const changeColor =()=>{
    const a='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
      {
        color+=a[Math.floor(Math.random()*16)];

      }
      return color; 
    };
    useEffect(()=>{
      const interval=setInterval(()=>{setBgColor(changeColor());},2000);
      return()=> clearInterval(interval);
      },[]);
      return(
        <div style={{backgroundColor:bgColor,height:'100vh',transition:'background-color 0.3s'}}>
          <h1 > hello suretrust</h1>
        </div>
      )
    
}
