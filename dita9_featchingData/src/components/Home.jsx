import React, {useEffect, useState} from 'react'
// import './Home.css'
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {

    const { list, error, loading } = useFetch('http://localhost:3000/list');

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