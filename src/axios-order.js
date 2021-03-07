import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://borger-boilder-default-rtdb.firebaseio.com'
})

export default axiosInstance;