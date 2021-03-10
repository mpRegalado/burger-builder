import {useContext, useEffect} from 'react'
import {useHistory} from 'react-router'
import {AuthContext} from '../../context/auth-context'

const SignOut = () => {
    const history = useHistory();
    const {logOut} = useContext(AuthContext);

    useEffect(() => {
        logOut()
        history.push('/')
    }, [logOut])

    return null;

}

export default SignOut;