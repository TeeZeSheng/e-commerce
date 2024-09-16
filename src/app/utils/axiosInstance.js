import axios from "axios";

const axiosInstance = axios.create({

    baseURL: 'https://ecommerce-backend-rqk3.onrender.com/api/v1',
    timeout: 1000,
    
  });

export default axiosInstance
