import React from 'react'

const data = [
    {
        name: "Item 1",
        children: [
            {
                name: "Subitem 1.1",
                children: [
                    { name: "Subsubitem 1.1.1", children: [] },
                    { name: "Subsubitem 1.1.2", children: [] },
                ],
            },
            { name: "Subitem 1.2", children: [] },
        ],
    },
    {
        name: "Item 2",
        children: [
            { name: "Subitem 2.1", children: [] },
            { name: "Subitem 2.2", children: [] },
        ],
    },
];


const Rendering = () => {
    const renderNestedItems = (items) => {
        return (
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name}
                        {item.children.length > 0 && renderNestedItems(item.children)}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <div>
            <h2>Nested List</h2>
            {renderNestedItems(data)}
        </div>
    );
}

export default Rendering
