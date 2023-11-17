import {createContext,useState} from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [isLogin, setLogin] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    return (
        <AppContext.Provider value={{isLogin, setLogin, userEmail, setUserEmail}}>
            {children}
        </AppContext.Provider>
    ) 
    
}