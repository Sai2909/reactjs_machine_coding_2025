import React from 'react'

const Intrests = ({ data, setData, error }) => {
    const { intrests } = data

    const handleChange = (e, name) => {
        setData((prevData) => ({
            ...prevData,
            intrests: e.target.checked ?
                [...prevData.intrests, e.target.name] :
                prevData.intrests.filter((i) => i !== e.target.name)
        }))
    }
    console.log(intrests)
    return (
        <div>
            <div>
                <label>
                    <input type='checkbox'
                        name='coding'
                        checked={intrests.includes("coding")}
                        onChange={handleChange}
                    />
                    Coding
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox'
                        name='cricket'
                        checked={intrests.includes("cricket")}
                        onChange={handleChange}

                    />
                    Cricket
                </label>
            </div>
            <div>
                <label>
                    <input type='checkbox'
                        name='running'
                        checked={intrests.includes("running")}
                        onChange={handleChange}

                    />
                    Running
                </label>
            </div>
            {error.intrests && <span className='error'>{error.intrests}</span>}

        </div>
    )
}

export default Intrests
