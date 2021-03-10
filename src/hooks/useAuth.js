import {useState} from 'react'

const useAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [existing, setExisting] = useState(false);

    const submitHandler = () => {
        const credentials = {
            email: email,
            password: password
        }
        console.log(credentials);
    }

    return {
        email, setEmail,
        password, setPassword,
        existing, setExisting,
        submitHandler
    }
}
export default useAuth;