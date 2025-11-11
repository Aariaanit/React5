import React,{useState, useEffect} from 'react'

function useFetch(url) {

    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        fetch(url)
        
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

  return {
    list,
    error,
    loading
  }
}

export default useFetch