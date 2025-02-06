import React from 'react'

const GettingHoc = ({ data, isLoading, error }) => {
    if (isLoading) {
        return <div>Loding...</div>
    }
    if (error) {
        return <div>error:{error.message}</div>
    }
    return (
        <div>
            <h2>Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default GettingHoc
