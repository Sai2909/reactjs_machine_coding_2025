import React from 'react'

const Settings = ({ data, setData }) => {
    const { theame } = data
    const handleChange = (e) => {
        setData((prevData) => ({
            ...prevData, 
            theame: e.target.name
        }))
    }
    return (
        <div>
            <div>
                <label>
                    <input type='radio'
                        name='dark'
                        checked={theame === "dark"}
                        onClick={handleChange}

                    />
                    Dark
                </label>
            </div>
            <div>
                <label>
                    <input type='radio'
                        name='light'
                        checked={theame === "light"}
                        onClick={handleChange}

                    />
                    Light
                </label>
            </div>
        </div>
    )
}

export default Settings
