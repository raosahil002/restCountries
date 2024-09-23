import { createContext, useState } from "react";

const BtnContext = createContext();

function Provider({children}){
    const [darkMode, setDarkMode] = useState(false)

    const handleClick = () => {
        setDarkMode(!darkMode)
    }

    return(
        <BtnContext.Provider value ={{darkMode, setDarkMode, handleClick}}>
            {children}
        </BtnContext.Provider>
    )
}

export default BtnContext;
export {Provider};