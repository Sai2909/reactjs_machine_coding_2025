import React, { useRef, useState } from 'react'

const DragPerson = () => {
    const [peoples, setPeoples] = useState([
        { id: 1, name: 'Sai', tech: 'react js' },
        { id: 2, name: 'Kiran', tech: 'node js' },
        { id: 3, name: 'Shiva', tech: 'nest js' },
        { id: 4, name: 'Prasad', tech: 'dotnet' },
    ])

    const dragPerson = useRef();
    const dragPersonOver = useRef();

    const handleSort = () => {
        const peopleClone = [...peoples]
        const temp = peopleClone[dragPerson.current]
        peopleClone[dragPerson.current] = peopleClone[dragPersonOver.current];
        peopleClone[dragPersonOver.current] = temp;
        setPeoples(peopleClone)
    }
    return (
        <div className='m-3 '>
            {
                peoples.map((people, index) => {
                    return (
                        <div key={index}
                            draggable
                            onDragStart={() => (dragPerson.current = index)}
                            onDragEnter={() => (dragPersonOver.current = index)}
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <p className='border'>{people.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DragPerson
