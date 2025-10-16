import React from 'react'
// import './Home.css'

function Home() {

    const fun = () => {
        console.log("Hello World!!!");
    }

    const fun2 = (name) => {
        console.log("Hello " + name);
        console.log(`Hello ${name}`);
    }

    const style = {
        color: "pink",
        background: "rgba(0,0,0,0.5)",
        textAlign: "center",
        padding: "10px",
        borderRadius: "10px"
    }


  return (
    <>
        
        <h1 style={{color:"red",background:"lightblue"}}>Home Page</h1>
        <p>{ fun() }</p>
        <button onClick={fun}>Kliko</button>
        <button onClick={() =>fun2("Arianit")}>Kliko2</button>

        <h2 style={style}>Styling in React</h2>
        <p style={style}>Shkolla Digjitale</p>
        <p className='text'>Prizren</p>
    </>
  )
}

export default Home