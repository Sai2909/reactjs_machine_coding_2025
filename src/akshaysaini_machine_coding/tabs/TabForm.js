import React, { useState } from 'react'
import './Tabs.css'
import Profile from './Profile'
import Intrests from './Intrests'
import Settings from './Settings'


const TabForm = () => {
    const [data, setData] = useState({
        name: "saikiran",
        age: 24,
        email: "saikiranmanchala2000@gmail.com",
        intrests: ["coding", "cricket"],
        theame: "dark"
    })

    const [activeTab, setActiveTab] = useState(0)
    const [error, setError] = useState({})
    const tabs = [
        {
            name: "Profile",
            component: Profile,

            validate: () => {
                const err = {};
                if (!data.name || data.name.length < 2) {
                    err.name = "Name is not valid"
                }
                if (!data.email || data.email < 18) {
                    err.email = "Email is not valid"
                }
                if (!data.age || data.age.length < 2) {
                    err.age = "Age is not valid"
                }
                setError(err)
                return err.name || err.email || err.age ? false : true
            }
        },
        {
            name: "Intrests",
            component: Intrests,
            validate: () => {
                const err = {};
                if (data.intrests.length < 1) {
                    err.intrests = "select atleast one "
                }
                setError(err)
                return err.intrests ? false : true;
            }
        },
        {
            name: "settings",
            component: Settings,
            validate: () => {
                return true
            }
        }

    ]

    const ActiveTabComponent = tabs[activeTab].component


    const handleNextClick = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab((prevTab) => prevTab + 1)
        }
    }
    const handlePrevClick = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab((prevTab) => prevTab - 1)
        }
    }
    const handleSubmit = () => {
        //api call
        console.log(data)
    }

    return (
        <div>
            <div className='header-container'>
                {
                    tabs.map((t, index) => (
                        <div className='header' key={index} onClick={() => tabs[activeTab].validate() && setActiveTab(index)}>{t.name}</div>
                    ))
                }

            </div>
            <div className='tab-body'>
                <ActiveTabComponent data={data} setData={setData} error={error} />
            </div>
            <div className='submit'>
                {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
                {activeTab < tabs.length - 1 && <button onClick={handleNextClick}>Next</button>}
                {activeTab === tabs.length - 1 && <button onClick={handleSubmit}>submit</button>}
            </div>
        </div>
    )
}

export default TabForm
