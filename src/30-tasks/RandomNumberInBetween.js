import React, { useState } from 'react'

const RandomNumberInBetween = () => {
    const [startNum, setStartNum] = useState(null);
    const [endNum, setEndNum] = useState(null);
    const [randomNum, setRandomNum] = useState(null);

    const RandomNum = (e) => {
        e.preventDefault();
        const start = parseInt(startNum);
        const end = parseInt(endNum);

        if (isNaN(start) || isNaN(end) || start.length === 0 || end.length === 0) {
            setRandomNum('Input Invalid');
        } else {
            const Randomss = Math.floor(Math.random() * (end - start) + start)
            setRandomNum(Randomss)
        }
    }
    return (
        <div className='container' >
            <h2>Task-3: Random Number In Between</h2>
            <input className='form-control w-25' type='number' value={startNum} onChange={(e) => setStartNum(e.target.value)} /><br />
            <input className='form-control w-25' type='number' value={endNum} onChange={(e) => setEndNum(e.target.value)} />
            <button className='btn btn-info mt-2' onClick={RandomNum}>Random Number</button>
            <div>
                <h3>{randomNum}</h3>
            </div>
        </div>
    )
}

export default RandomNumberInBetween
