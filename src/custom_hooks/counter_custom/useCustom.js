import { useState } from 'react'

const useCustom = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }
    return { increment, count }
}
export default useCustom

