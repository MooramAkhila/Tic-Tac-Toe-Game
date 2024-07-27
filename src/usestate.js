import React, { useState, useEffect } from 'react';

export default function Hook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("RK Valley");
  const [color, setColor] = useState("red");

  const click = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <input type="text" id="pname" />
      <button
        onClick={() => {
          let pname = document.getElementById("pname").value;
          setName(pname);
        }}
      >
        Update
      </button>
      <button onClick={() => click(color === "yellow" ? "blue" : "yellow")}>
        Change
      </button>
      <button onClick={() => setCount(count + 1)}>Click</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
