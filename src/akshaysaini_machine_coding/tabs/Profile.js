import React from 'react'

const Profile = ({ data, setData, error }) => {
    const { name, email, age, countrys } = data;

    const handleChange = (e, item) => {
        setData((prevData) => (
            {
                ...prevData,
                [item]: e.target.value
                //name:e.target.value
            }
        ))
    }


    return (
        <div>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => handleChange(e, "name")} />
                {error.name && <span className='error'>{error.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => handleChange(e, "email")} />
                {error.email && <span className='error'>{error.email}</span>}

            </div>
            <div>
                <label>Age:</label>
                <input type="number" value={age} onChange={(e) => handleChange(e, "age")} />
                {error.age && <span className='error'>{error.age}</span>}

            </div>
            <div>
                <label>Select Country:</label>
                <select value={data.country || ""} onChange={(e) => handleChange(e, "country")}>
                    {countrys.map((country, index) => (
                        <option key={index}>{country}</option>

                    ))}
                </select>
                {error.countrys && <span className='error'>{error.countrys}</span>}

            </div>
        </div>
    )
}

export default Profile
