import axios from 'axios'

export const BASE_API_URL =
    process.env.NODE_ENV === 'production'
        ? '/api/v1'
        : 'http://localhost:5000/api/v1'

axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token')

export default axios;
