import axios from 'axios';

let api = axios.create({
    headers: {
        'Client-ID' : 'ogyae7e2msxh6tnjakbl5s3adq3tnq'
    }
})

export default api;