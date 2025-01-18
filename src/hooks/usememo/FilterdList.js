import React, { useMemo, useState } from 'react'

const FilterdList = () => {

    const [query, setQuery] = useState('');
    const [list] = useState(['apple', 'banana', 'graped']);
    // const filteredList = useMemo(() => {
    //     console.log('filtering');
    //     return list.filter((li) => li.toLowerCase().includes(query.toLowerCase()))
    // }, [query, list]);

    const filteredList = list.filter((li) => {
        if (query === " ") {
            return list
        } else {
            return li.toLowerCase().includes(query.toLowerCase())
        }
    })



    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='search...' />
            <ul>
                {
                    filteredList.map((fill, index) => {
                        return (
                            <li key={index}>{fill}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FilterdList
