import React, { useRef } from 'react'

const FileUploadingUseref = () => {

    const fildeUploadRef = useRef(null);
    const handleClcik = () => {
        fildeUploadRef.current.click()
    }
    return (
        <div>
            <input type="file" ref={fildeUploadRef} style={{ display: 'none' }} onChange={(e) => console.log(e.target.files[0])} />
            <button onClick={handleClcik}>UploadFile</button>
        </div>
    )
}

export default FileUploadingUseref
