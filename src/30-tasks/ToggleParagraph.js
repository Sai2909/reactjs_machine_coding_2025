import React, { useState } from 'react'

const ToggleParagraph = () => {
    const [visible, setVisible] = useState(true)

    const handleClick = () => {
        setVisible(!visible)
    }
    return (
        <div className='container'>
            <h2>TASK-2 : TOGGLE PARAGRAPH</h2>
            {
                visible && <h3>Hey Sai Good Morning...!</h3>
            }
            <div>
                <button className='toggle-button btn btn-info' onClick={handleClick}>
                    Togle
                </button>
            </div>

        </div>
    )
}

export default ToggleParagraph
