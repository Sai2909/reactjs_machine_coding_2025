import React from 'react'
import WithLoaderHoc from './WithLoaderHoc'
import UserHoc from './UserHoc'

const UserWithLoader = WithLoaderHoc(UserHoc)

const Main = () => {
    return (
        <div>
            <UserWithLoader />
        </div>
    )
}

export default Main
