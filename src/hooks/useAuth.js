import {useState, useContext} from 'react'
import {useHistory} from 'react-router'
import axios from 'axios'
import {AuthContext} from '../context/auth-context'

const useAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [existing, setExisting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const auth = useContext(AuthContext);
    const history = useHistory();

    const submit = () => {
        const credentials = {
            email: email,
            password: password
        }
        if(existing){
            return authenticate('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+process.env.REACT_APP_WEB_API, credentials);
        } else {
            return authenticate('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+process.env.REACT_APP_WEB_API, credentials);
        }
    }

    const authenticate = (endpoint, credentials) => {
        setLoading(true);
        setError(null);
        return axios.post(endpoint, {...credentials, returnSecureToken:true})
            .then(response => {
                setLoading(false);
                auth.logIn(response.data.idToken, response.data.localId);
                
                setTimeout(() => {
                    auth.logOut();
                },response.data.expiresIn*1000);

                if (history.location.search==='?continueToCheckout') {
                    history.push('/checkout')
                } else {
                    history.push('/')
                }
            })
            .catch(error => {
                setLoading(false);
                setError(error);
            })
    }

    return {
        email, setEmail,
        password, setPassword,
        existing, setExisting,
        loading, error,
        submit
    }
}
export default useAuth;