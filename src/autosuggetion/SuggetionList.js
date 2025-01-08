import React, { useState } from "react";

const suggestionsList = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grapes",
    "Lemon",
    "Mango",
    "Orange",
    "Peach",
    "Pineapple",
    "Strawberry",
];

function SuggetionList() {
    const [inputValue, setInputValue] = useState("");
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value.trim() === "") {
            setShowSuggestions(false);
            setFilteredSuggestions([]);
            return;
        }

        // Filter suggestions based on input
        const matches = suggestionsList.filter((suggestion) =>
            suggestion.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredSuggestions(matches);
        setShowSuggestions(matches.length > 0);
    };

    const handleSelect = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };

    return (
        <div className="container mt-4">
            <h3>Typeahead Example</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Type to search..."
                value={inputValue}
                onChange={handleChange}
            />
            {showSuggestions && (
                <ul className="list-group mt-2">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleSelect(suggestion)}
                            style={{ cursor: "pointer" }}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SuggetionList;
