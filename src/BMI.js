import React, { useState } from "react";

export default function Bmi() {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');

    const calcbmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert("Please enter a valid weight and height");
        } else {
            let r = (weight / (height * height)) * 703;
            setBmi(r.toFixed(1));

            if (r < 18.5) {
                setMessage('You are underweight');
            } else if (r >= 18.5 && r < 24.9) {
                setMessage('You have a healthy weight');
            } else {
                setMessage('You are overweight');
            }
        }
    }

    const reload = () => {
        window.location.reload();
    }

    return (
        <div className="App">
            <div className="container">
                <h2>BMI CALCULATOR</h2>
                <form onSubmit={calcbmi}>
                    <div>
                        <label>Weight (lbs)</label>
                        <input 
                            type="text" 
                            placeholder="Enter weight" 
                            value={weight} 
                            onChange={(e) => setWeight(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Height (inches)</label>
                        <input 
                            type="text" 
                            placeholder="Enter height" 
                            value={height} 
                            onChange={(e) => setHeight(e.target.value)} 
                        />
                    </div>
                    <div>
                        <button className='btn' type='submit'>Submit</button>
                        <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
                    </div>
                    <div className="center">
                        <h3>Your BMI is: {bmi}</h3>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}
