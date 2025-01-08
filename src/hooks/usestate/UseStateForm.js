import React, { useState } from "react";

function UseStateForm() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "",
        stockAvailability: false,
        language: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit} className="p-4 border shadow rounded">
                <h3 className="mb-4">Form with Bootstrap</h3>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender:</label>
                    <select
                        name="gender"
                        id="gender"
                        className="form-select"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="stockAvailability"
                        id="stockAvailability"
                        checked={formData.stockAvailability}
                        onChange={handleChange}
                    />
                    <label htmlFor="stockAvailability" className="form-check-label">Stock Availability</label>
                </div>

                <div className="mb-3">
                    <label htmlFor="language" className="form-label">Language:</label>
                    <input
                        type="text"
                        className="form-control"
                        name="language"
                        id="language"
                        value={formData.language}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default UseStateForm;
