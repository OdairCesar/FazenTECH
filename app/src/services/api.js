import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8081/',
    // baseURL: 'http://testetrabalhofacul-com-br.umbler.net/',
    headers: {
        'Content-Type': 'application/json ',
        'Accept': 'application/json',
        "Access-Control-Origin": "*"
    },
});

export default api;