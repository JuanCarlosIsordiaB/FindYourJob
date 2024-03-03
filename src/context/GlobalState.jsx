import { createContext, useContext, useState } from "react";


export const Context = createContext();

export const useGlobalState = () => {
    const data = useContext(Context);
    return data;
}


const GlobalProvider = ({ children }) => {
    const [savedJobs, setSavedJobs] = useState([]);


    return (
        <Context.Provider value={{savedJobs }}>
            {children}
        </Context.Provider>
    )
}

export default GlobalProvider;