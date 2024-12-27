import React from 'react'

const EventsComponent = () => {

    const handleClick = (event) => {
        // console.log(event)

        // switch (event.detail) {
        //     case 1: {
        //         console.log("single")
        //         break
        //     }
        //     case 2: {
        //         console.log("double")
        //         break
        //     }
        //     case 3: {
        //         console.log("Three")
        //         break
        //     }
        //     default: {
        //         break;
        //     }
        // }

        if (event.detail === 2) {
            console.log("double")
        }
    }

    return (
        <div>
            <button onClick={handleClick}>click</button>
        </div>
    )
}

export default EventsComponent
