//usage
// note- there should be different classes to toggle between dark and light mode
// here, ex- 'dark-mode', 'light-mode'

import './Theam.css'
import useDarkMode from "./useDarkMode";

const Theam = () => {


    const { isdarMode, togleDarkMode } = useDarkMode();


    return (
        <div className={isdarMode ? "dark-mode" : "light-mode"} >
            <button onClick={togleDarkMode}>
                {isdarMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
            </button>
        </div>
    );
};
export default Theam;
