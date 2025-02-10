import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Validation() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        habits: {
            cricket: false,
            coding: false,
            javascript: false,
        },
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        habits: "",
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData({
                ...formData,
                habits: {
                    ...formData.habits,
                    [name]: checked,
                },
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            name: "",
            email: "",
            password: "",
            habits: "",
        };

        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
            isValid = false;
        } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
            newErrors.name = "Name should only contain alphabetic characters";
            isValid = false;
        }

        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (formData.password.trim() === "") {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (formData.password.length < 8) {
            newErrors.password = "Password should be at least 8 characters long";
            isValid = false;
        }

        if (!formData.habits.cricket && !formData.habits.coding && !formData.habits.javascript) {
            newErrors.habits = "At least one habit must be selected";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
        }
    };

    return (
        <div className="container mt-5">
            <div className="card p-4">
                <h2 className="text-center">Registration Form</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input
                            type="password"
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Habits:</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="cricket"
                                checked={formData.habits.cricket}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">Cricket</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="coding"
                                checked={formData.habits.coding}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">Coding</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="javascript"
                                checked={formData.habits.javascript}
                                onChange={handleInputChange}
                            />
                            <label className="form-check-label">JavaScript</label>
                        </div>
                        {errors.habits && <div className="text-danger">{errors.habits}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Validation;