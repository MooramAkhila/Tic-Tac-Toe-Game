import React from "react";
import pic from './ak1.jpeg';
export default  function First()
{
    function display()
    {
        alert("message is displayed");
    }
    function formatName(user)
    {
        return user.age + user.class;
    }
    const user={
        age:"akhila",
        class:12,
    };
   
    return (
        <>
        <h1> Hello ,{formatName(user)}</h1>
        <img src={pic} alt="image not found" onClick={display}></img>
        </>
    );
}