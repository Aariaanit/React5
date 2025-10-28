import React,{ useState} from 'react'


function About() {
    const [list, setList] = useState([
        {id: 1, name: "Arianit", age: 31, city: "Prizren"},
        {id:2, name: "Arbër",age: 29,city: "Prishtinë"},
        {id:3, name: "Ardit",age: 28,city: "Pejë"}

    ]);

  return (
    <>
        <h1>Welcome to the About Page</h1>
        <div>
            {list.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>Age: {item.age}</p>
                    <p>City: {item.city}</p>
                    <hr />
                </div>
            ))}
            
        </div>
    </>
  )
}
export default About