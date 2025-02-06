import React from 'react'
import FetchingHoc from './FetchingHoc'
import GettingHoc from './GettingHoc'

const EndofHoc = FetchingHoc(GettingHoc, 'https://jsonplaceholder.typicode.com/posts')

const ViewHoc = () => {
    return (
        <div>
            <EndofHoc />
        </div>
    )
}

export default ViewHoc
