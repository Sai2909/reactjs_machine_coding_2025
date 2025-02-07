import React, { useRef, useState, useEffect } from 'react'

const DropDownref = () => {
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>
            <button onClick={() => setOpen(!open)}>DropDown</button>
            {
                open && (
                    <div >
                        <ul >
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                    </div>
                )
            }

        </div>
    )
}

export default DropDownref


/*


Event Bubbling	Event starts from the target element and moves up the DOM tree to the document.
	✅ Yes, because the mousedown event is triggered on document, catching clicks from child elements.
Event Capturing	Event starts from the top (document) and moves down to the target element.	
    ❌ No, because mousedown by default follows bubbling, not capturing.
Event Delegation	Uses a single event listener on a parent to handle multiple child elements dynamically.	
    ❌ No, because the event is attached to document, not a parent of multiple dynamic elements.
*/
