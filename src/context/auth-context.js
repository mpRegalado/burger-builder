import {createContext, useState} from 'react'

export const AuthContext = createContext({
    authenticated:null,
});

const AuthContextProvider = props => {
    const [authenticated, setAuthenticated] = useState(null)
    const [userId, setUserId] = useState(null);

    const logIn = (token, userId) => {
        setAuthenticated(token);
        setUserId(userId);
    }
    const logOut = () => {
        setAuthenticated(null);
    }
    return (
        <AuthContext.Provider value={{
            authenticated:authenticated,
            userId: userId,
            logIn:logIn,
            logOut:logOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider