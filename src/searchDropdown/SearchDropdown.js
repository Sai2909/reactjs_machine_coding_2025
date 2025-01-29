import React, { useState } from 'react'



const PlanetData = [
    {
        "id": 1,
        "name": "Mercury",
        "distance_from_sun_km": 57910000,
        "diameter_km": 4879
    },
    {
        "id": 2,
        "name": "Venus",
        "distance_from_sun_km": 108200000,
        "diameter_km": 12104
    },
    {
        "id": 3,
        "name": "Earth",
        "distance_from_sun_km": 149600000,
        "diameter_km": 12742
    },
    {
        "id": 4,
        "name": "Mars",
        "distance_from_sun_km": 227940000,
        "diameter_km": 6779
    },
    {
        "id": 5,
        "name": "Jupiter",
        "distance_from_sun_km": 778330000,
        "diameter_km": 139820
    },
    {
        "id": 6,
        "name": "Saturn",
        "distance_from_sun_km": 1429400000,
        "diameter_km": 116460
    },
    {
        "id": 7,
        "name": "Uranus",
        "distance_from_sun_km": 2870990000,
        "diameter_km": 50724
    },
    {
        "id": 8,
        "name": "Neptune",
        "distance_from_sun_km": 4495000000,
        "diameter_km": 49244
    },
    {
        "id": 9,
        "name": "Pluto",
        "distance_from_sun_km": 5906400000,
        "diameter_km": 2376
    },
    {
        "id": 10,
        "name": "Eris",
        "distance_from_sun_km": 10100000000,
        "diameter_km": 2326
    }
]


const SearchDropdown = () => {
    const [filterdList, setFilterdList] = useState(PlanetData)
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
           <div>
           <input type='text' placeholder='searchHere...' />
           </div>
           <div>
            <select>
                <option value="2000">Greaterhtan 2000km</option>
            </select>
           </div>
        </div>
    )
}

export default SearchDropdown
