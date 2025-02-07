import React, { useEffect, useRef, useState } from 'react'

const EverySec = () => {

    const interRef = useRef(null)
    const [value, setValue] = useState(0)
    useEffect(() => {
        interRef.current = setInterval(() => {
            setValue((value) => value + 1)
        }, 100);
        return () => {
            clearInterval(interRef.current)
        }
    }, [])

    return (
        <div>
            <p>count:{value}</p>
        </div>
    )
}

export default EverySec
