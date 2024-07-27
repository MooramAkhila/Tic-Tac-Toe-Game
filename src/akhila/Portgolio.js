import React from 'react';
import './main.css'
import image from 'images.jpeg';


export default function Main(){
    return(
        <div >

        <ul className="hori-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Qualification </a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
        </ul>
        <div className="modify">
        <h1 className="about"> About </h1>
        <p className="p1"> I am Akhila  studying btech 4 th year </p>
        <h1 className="Projects">Projects </h1>
        <p className="p2"> I can do 2 projects
        	<ol> 
        	<li>Beauty products ecommerce website </li> 
        	<li> Tic Tac Toe game</li>
        	
        	</ol>
        	</p>
        	</div>
         
        </div>
    );
}
