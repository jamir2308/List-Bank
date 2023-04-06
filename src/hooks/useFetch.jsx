import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                mode: 'cors',
                credentials: 'include',
            }).then(result => {
               return result.json();
            }).then(response => {
                setData(response);
                setLoading(false);
            }).catch(error => {
                console.log(error)
                setError(error);
                setLoading(false);
            });
        };
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;