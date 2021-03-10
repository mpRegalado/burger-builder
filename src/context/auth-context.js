import {createContext, useState} from 'react'

export const AuthContext = createContext({
    authToken:null
});

const AuthContextProvider = props => {
    const [authenticated, setAuthenticated] = useState(false)
    const logIn = () => {
        setAuthenticated(true);
    }
    const logOut = () => {
        setAuthenticated(false)
    }
    return (
        <AuthContext.Provider value={{
            authenticated:authenticated,
            logIn:logIn,
            logOut:logOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider