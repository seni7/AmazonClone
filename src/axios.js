import axios from 'axios';
const instance = axios.create({
    baseURL: "http://localhost:5001/clone-97c18/us-central1/api",
});
export default instance;

// http://localhost:5001/fir-437f4/us-central1/api