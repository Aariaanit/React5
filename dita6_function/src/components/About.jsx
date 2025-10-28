import React from 'react'
import img1 from '/nature.jpg';

function About() {

    const p1 = {
        color: "lightblue",
        fontSize: "20px",
        fontWeight: "bold",
        textDecoration: "underline"
    };
    const p2 = {
        color: "green",
        fontSize: "18px",
        fontStyle: "italic"
    };
  return (
    <>
        <h1 style={{color:"red",fontSize:"34px"}}>About Page</h1>
        <p style={p1}>This is the about page of our React application.</p>
        <p style={p2}>We are learning how to use inline styles in React.</p>

        <img src={img1} alt="Nature" />
        <br />
        <img src="/nature.jpg" alt="Nature from public folder" />
        <br />
        <img src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg" alt="Nature from public folder" />
    </>
  )
}

export default About