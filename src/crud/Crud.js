import React, { useEffect, useState } from 'react'

const Crud = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
                const result = await response.json();
                setData(result)
            } catch (error) {
                console.error("error", error)
            }
        }
        fetchData()
    }, [])

    const updateItem = (index, title) => {
        const updateItems = [...data];
        updateItems[index] = { title }
        setData(updateItems)

    }


    const addItem = (title) => {
        const newItem = { title }
        setData([...data, newItem])
    }


    // const deleteItem = (index) => {
    //     const deleteItems = [...data];
    //     deleteItems.splice(index, 1);
    //     setData(deleteItems)
    // }

    const deleteItem = (index) => {
        const deleted = data.filter((item, da) => da !== index)
        setData(deleted)
    }

    /*
   The callback function inside .filter() receives two arguments:
   First argument (_): Represents the actual item (which is unused in this case).
   Second argument (da): Represents the index of the item in the array.
    */
    return (
        <div>
            {
                data.map((da, index) => (
                    <li key={index}>
                        {da.title}
                        <button onClick={() => updateItem(index, "update")}>update</button>
                        <button onClick={() => deleteItem(index)}>Delete</button>
                    </li>
                ))
            }
            <button onClick={() => addItem("new item")}>Add Item</button>
        </div>
    )
}

export default Crud
