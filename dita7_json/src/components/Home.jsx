import React, {useEffect, useState} from 'react'
// import './Home.css'
import BlogList from './BlogList';

function Home() {

    const [list, setList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:300/list')
        .then((res) => 
            res.json()
        )
        .then((data) => 
            setList(data)
        )
        .catch((error) =>
            setError('Error fetching data:', error)
        );
    }, []);


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
        {error && <p style={{color:"red"}}>{error}</p>}
        <BlogList list={list} deleteButton={deleteButton} viewButton={viewButton} />
    </>
  )
}
export default Home