import { createContext, useContext } from "react";

//1. create context
const GloballanguageContext = createContext(null);

const Context = () => {
    const contextValue = { language: "EN" }

    return (
        //2. connect with all the child components under Provider
        //One time Config - Here in Provider's value prop you can pass
        //the value of your context global variable
        <GloballanguageContext.Provider value={contextValue}>
            <Child />

        </GloballanguageContext.Provider>
    )
}

export default Context



const Child = () => {
    //use varible
    const { language } = useContext(GloballanguageContext)
    return <h2>Application:{language}</h2>
}

