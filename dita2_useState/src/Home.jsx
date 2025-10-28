import React, { useState } from 'react'

function Home() {

    const name = "Arianit";
    console.log(name);
    const age = 31;
    const arr = [1,2,3,4,5];
    const obj = {
        name: "Arianit", 
        age: 31,
        city: "Prizren"
    };

    // name ="Lis"

    const [vlera, setVlera] = useState(0);
    const [emer, setEmer] = useState("Arianit");
    const [arr2, setArr2] = useState([1,2,3]);
    const [obj2, setObj2] = useState({
        name: "Arianit",
        age: 31,
        city: "Prizren"
    });

  return (
    <>
        <h1>Welcome to the Home Page</h1>
        <h2>{ name }</h2>
        <h2>{ age }</h2>
        <h2>{ arr }</h2>
        <h2>{ obj.name } - { obj.age } - { obj.city }</h2>

        <hr />

        <h2>{ vlera }</h2>
        <button onClick={ () => setVlera(vlera + 1) }>Shto 1</button>
        <p>{ emer }</p>
        <button onClick={ () => setEmer("Lis") }>Ndrysho Emrin</button>
        <p>{ arr2 }</p>
        <p>{ obj2.name } - { obj2.age } - { obj2.city }</p>
    </>
  )
}

export default Home