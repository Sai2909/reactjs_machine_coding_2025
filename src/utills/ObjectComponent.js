import React from 'react'

const ObjectComponent = () => {
    const myBio = {
        name: "saikiran",
        age: 24,
        village: "potharam"
    }
    console.log(Object.keys(myBio))
    console.log(Object.values(myBio))

    return (
        <div>
            {
                Object.keys(myBio).map((value, index) => {
                    return (
                        <div key={index}>
                            {value}:{myBio[value]}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ObjectComponent
