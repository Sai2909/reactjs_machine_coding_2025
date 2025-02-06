import React from 'react'

const UserHoc = () => {
    const user = {
        name: "sai kiran",
        email: "saikiranmanchala2000@gmail.com"
    }
    return (
        <div>
            <h2>username:{user.name}</h2>
            <h2>email:{user.email}</h2>
        </div>
    )
}

export default UserHoc
