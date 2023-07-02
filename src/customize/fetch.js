import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const ourRequest = axios.CancelToken.source();
        async function fetchData() {
            try {
                let res = await axios.get(url, {
                    cancelToken: ourRequest.token,
                })
                let data = res && res.data ? res.data : [];
                // data = data.reverse();
                setData(data)
                setLoading(false)
                setIsError(false)
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.log('Request canceled', err.message)
                } else {
                    setLoading(false)
                    setIsError(true)
                }
            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000)

        return () => {
            ourRequest.cancel('Operation canceled by the user!')
        }

    }, [url]);

    return {
        data, isLoading, isError
    }
}

export default useFetch;