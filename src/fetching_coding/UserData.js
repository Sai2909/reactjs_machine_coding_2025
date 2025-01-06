import React from 'react'

const UserData = ({ loading, data }) => {
    if (loading) {
        return "Loading ...."
    }
    return (
        <div>
            {
                data.map((da) => {
                    return (
                        <li>{da.title}</li>
                    )
                })
            }
        </div>
    )
}

export default UserData
