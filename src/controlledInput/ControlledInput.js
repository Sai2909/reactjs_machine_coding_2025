import { useEffect, useState } from "react"

const ControlledInput = () => {
    const [input, setInput] = useState("");
    const [displayedValue, setDisplayedValue] = useState("")


    useEffect(() => {
        let timeOutId = null;

        const delayedDisplay = () => {
            timeOutId = setTimeout(() => {
                setDisplayedValue(input)
            }, 2000)
        }
        // Clear the previous timeout when the user types within 2 seconds
        clearTimeout(timeOutId)
        // Initiate the delayed update only when the user stops typing
        delayedDisplay()

        //clean up the timeout on compoennt unmount
        return (() => {
            clearTimeout(timeOutId)
        })
    }, [input])

    const handleChage = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" value={input} onChange={handleChage} />
            </div>
            <h2>{displayedValue}</h2>
        </div>
    )

}
export default ControlledInput