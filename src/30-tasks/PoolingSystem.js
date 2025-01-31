import React, { useState } from 'react'


const PoolingSystem = () => {
    const [optionA, setOptionA] = useState(0);
    const [optionB, setOptionB] = useState(0);
    const [optionC, setOptionC] = useState(0);
    const [optionD, setOptionD] = useState(0);



    return (
        <div >
            <h2>Who are Comming Ofice Tommaro..?</h2>
            <div >
                <button onClick={(e) => setOptionA((prevValue) => prevValue + 1)}><span>comming</span>{optionA}</button><br />
                <button onClick={(e) => setOptionB((prevValue) => prevValue + 1)}><span>Not comming</span>{optionB}</button><br />
                <button onClick={(e) => setOptionC((prevValue) => prevValue + 1)}><span>On the way</span>{optionC}</button><br /> 
                <button onClick={(e) => setOptionD((prevValue) => prevValue + 1)}><span>I already Reached</span>{optionD}</button>
            </div>
        </div>
    )
}

export default PoolingSystem
