import React, { useEffect, useState } from 'react'



//custom debounce
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        return () => {
            clearTimeout(timeOut)
        }
    }, [value, delay])
    return debouncedValue

}


const CustomDebounce = () => {
    const [value, setValue] = useState(0)

    const debounceValue = useDebounce(value, 1000)

    const handleIncreament = () => {
        setValue(value + 1)
    }
    return (
        <div>
            <p>Count:{value} |debounce value:{debounceValue}</p>
            <button onClick={handleIncreament}>INCREMENT</button>
        </div>
    )
}

export default CustomDebounce
