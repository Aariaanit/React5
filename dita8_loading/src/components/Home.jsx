import React, {useEffect, useState} from 'react'
// import './Home.css'
import BlogList from './BlogList';

function Home() {

    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:3000/list')
        
            .then((res) => 
                res.json()
            )
            .then((data) => {
                setList(data);
                setLoading(false);
            })
            .catch((error) =>{
                setError('Error fetching data:', error.message);
                setLoading(false);
            });
    }, 1000);
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
        {loading && <p>Loading...</p>}
        {error && <p style={{color:"red"}}>{error}</p>}
        {list && <BlogList list={list} deleteButton={deleteButton} viewButton={viewButton} />}
    </>
  )
}
export default Home