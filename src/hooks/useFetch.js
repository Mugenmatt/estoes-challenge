import React, {useState, useEffect} from 'react';

const useFetch = (URL) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        fetch(URL)
        .then((res) => res.json())
        .then((res) => {
            setData(res.data);
            setLoading(false)
        })
        .catch((err) => {
            setLoading(false);
            setError(err);
        });
    }

        useEffect(() => {
            fetchData()
        }, [URL])

        return {data, loading, error}
};

export default useFetch;