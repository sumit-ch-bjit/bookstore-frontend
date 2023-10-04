import axios from 'axios';

const apiInstance = axios.create({
    baseURL: 'http://localhost:3000/api',  // Replace with your API base URL
    timeout: 5000,  // Set a timeout for requests (in milliseconds)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiInstance;
