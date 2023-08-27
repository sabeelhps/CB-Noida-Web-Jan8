import { useEffect, useState } from 'react'

const useHttp = (url, startWithLoading=true) => {
    const [data, setData] = useState(null);
    const [err, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(startWithLoading);

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const response = await fetch(url);
                const resData = await response.json();
                setData(resData);
            }
            catch (err) {
                console.log('Inside catch');
                setError(err.message ? err.message : 'something went wrong');
            }
            finally {
                setIsLoading(false);
            }
        }   
        fetchData();
    }, []);

    return [data, err, isLoading];
}

export default useHttp;