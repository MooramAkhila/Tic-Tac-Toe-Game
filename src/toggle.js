import React,{useRef,useState,useEffect} from 'react';
import './style.css';
export default function Toggle(){
	const boxRef=useRef(null);
	const[isAnimating,setisAnimating]=useState(false);
	useEffect(()=>{
	if(isAnimating){
	boxRef.current.style.transform='translateY(-300px)';
	}
	else
{
		boxRef.current.style.transform='translateY(0)';
	}
	},[isAnimating]);
	const handleClick =()=>{
	setisAnimating(!isAnimating);
	};
	return (
	<div className="App">
	<button onClick={handleClick}>toggle Animation </button>
	<div ref={boxRef} className="box"></div>
	</div>
	);
	}
	
