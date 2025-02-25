const AndTernary = () => {
    const data = [
        { name: "sai", age: 22 },
        { name: "kiran", age: 25 },
        { name: "shiva", age: 21 }
    ]

    //when the data is empty then it will return zero because of false 0
    //when the data is  ur using ternary operatior with the null it will return the empty 
    return (
        <div>
            {/* <div>
                {data.length && (
                    <ul>
                        {data.map((da, id) => (
                            <div key={id}>
                                <li>{da.name},{da.age}</li>
                            </div>
                        ))}
                    </ul>
                )}
            </div> */}
            <div>
                {data.length ? (
                    <ul>
                        {data.map((da, id) => (
                            <div key={id}>
                                <li>{da.name},{da.age}</li>
                            </div>
                        ))}
                    </ul>
                ) : null}
            </div>
        </div>
    )
}
export default AndTernary;