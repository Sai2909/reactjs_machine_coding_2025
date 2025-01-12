import React, { useContext } from 'react'
import { UserContext } from './UseContextComponent'

const Component4 = () => {
    const user = useContext(UserContext);
    return (
        <div>
            <h1>Component 4</h1>
            <h2>{`Hello ${user} again!`}</h2>

        </div>
    )
}

export default Component4
