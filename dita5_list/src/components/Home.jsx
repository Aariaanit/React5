import React, {useState} from 'react'
// import './Home.css'
import BlogList from './BlogList';

function Home() {
    const [list, setList] = useState([
        {id: 1, name: "Arianit", age: 31, city: "Prizren"},
        {id:2, name: "Arbër",age: 29,city: "Prishtinë"},
        {id:3, name: "Ardit",age: 28,city: "Pejë"}

    ]);

    const deleteButton = (id) => {
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    const viewButton = (id) => {
        const newList = list.filter((item) => item.id === id);
        setList(newList);
    }
  return (
    <>
        <h1>Welcome to the Home Page</h1>
    
    <BlogList list={list} deleteButton={deleteButton} viewButton={viewButton} />
    </>
  )
}
export default Home