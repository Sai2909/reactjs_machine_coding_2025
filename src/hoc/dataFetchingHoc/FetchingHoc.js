import React, { useEffect, useState } from 'react'

const FetchingHoc = (WrappedComponent, dataSource) => {
    const Edhookkati = () => {
        const [data, setData] = useState([]);
        const [error, setError] = useState(false);
        const [isLoading, setIsLoading] = useState(null);
        useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true);
                try {
                    const responce = await fetch(dataSource);
                    if (!responce.ok) {
                        throw new Error('faild fetching data');
                    }
                    const result = await responce.json();
                    setData(result)
                } catch (error) {
                    setError(error);
                }
                finally {
                    setIsLoading(false)
                }

            }
            fetchData()
        }, []);
        return (
            <div>
                <WrappedComponent data={data} error={error} isLoading={isLoading} />
            </div>
        )

    }
    return Edhookkati;

}

export default FetchingHoc
