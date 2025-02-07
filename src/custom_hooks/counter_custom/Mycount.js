import useCustom from './useCustom'

const Mycount = () => {
    const { increment, count } = useCustom()
    return (
        <div>
            <p>The count is {count}.</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Mycount
