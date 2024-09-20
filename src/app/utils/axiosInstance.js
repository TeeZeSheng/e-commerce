import axios from "axios";

const axiosInstance = axios.create({

    // baseURL: 'https://ecommerce-backend-rqk3.onrender.com/api/v1/',
    baseURL: 'http://127.0.0.1:8080/api/v1/',
    timeout: 100000000,
    
  });

export default axiosInstance
