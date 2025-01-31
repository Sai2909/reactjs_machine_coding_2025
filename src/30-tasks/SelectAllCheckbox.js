import React, { useState } from "react";

const SelectAllCheckbox = () => {
    const [checkboxData, setCheckboxData] = useState([
        { id: 1, name: "Option A", checked: false },
        { id: 2, name: "Option B", checked: false },
        { id: 3, name: "Option C", checked: false },
        { id: 4, name: "Option D", checked: false },
        { id: 5, name: "Option E", checked: false }
    ]);

    // Handle individual checkbox change
    const handleCheckboxChange = (id) => {
        setCheckboxData(prevState =>
            prevState.map(item =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Handle Select All button
    // const handleSelectAll = () => {
    //     const updatedCheckboxes = checkboxData.map(item => ({
    //         ...item,
    //         checked: true
    //     }));
    //     setCheckboxData(updatedCheckboxes);
    // };


    const handleSelectAll = () => {
        const allChecked = checkboxData.every(item => item.checked);
        setCheckboxData(checkboxData.map(item => ({ ...item, checked: allChecked ? false : true })));
    };

    return (
        <div>
            <h2>TASK-5: SELECT ALL CHECKBOXES</h2>
            {checkboxData.map(check => (
                <label key={check.id} style={{ display: "block", marginBottom: "8px" }}>
                    <input
                        type="checkbox"
                        checked={check.checked}
                        onChange={() => handleCheckboxChange(check.id)}
                    />
                    {check.name}
                </label>
            ))}
            <div>
                {/* <button onClick={handleSelectAll}>Select all</button> */}
                <button onClick={handleSelectAll}>
                    {checkboxData.every(item => item.checked) ? "Unselect all" : "Select all"}
                </button>
            </div>
        </div>
    );
};

export default SelectAllCheckbox;
