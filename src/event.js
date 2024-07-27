import React from "react";
import image from './ak1.jpeg'
export default function hello()
{
    function display (num,e)
        {
            alert("display number:"+num);
            console.log(e);
        }
        return (
            <button onClick={(e)=>display(100,e)}>click</button>
        )
    
}