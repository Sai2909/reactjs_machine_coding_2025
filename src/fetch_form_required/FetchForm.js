import React, { useState } from "react";

function FetchForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        checkbox: false,
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: name === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("https://example.com/api/contact", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Error submitting form");
            }
            setFormData({
                name: "",
                email: "",
                message: "",
                checkbox: false,
            });
            setSubmitted(true);
            setError("");
        } catch (err) {
            setError(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />

            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
            />

            <label htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    name="checkbox"
                    checked={formData.checkbox}
                    onChange={handleChange}
                />
                Checkbox
            </label>

            {error && <div>{error}</div>}
            {submitting ? (
                <div>Submitting...</div>
            ) : submitted ? (
                <div>Form submitted successfully!</div>
            ) : (
                <button type="submit">Submit</button>
            )}
        </form>
    );
}

export default FetchForm;
