
import axios from 'axios';

const baseURL = 'http://localhost:8080/api/v1';
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const fetchUserData = async () => {
    try {
        const response = await axiosInstance.get('/users/me'); // Adjust this endpoint if needed
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user data');
    }
};

const SignUp = (name, email,password,role) => axios.post(`${baseURL}/auth/register`, { name, email,password,role });
const UserData = (email) => axiosInstance.get(`/users/email/${email}`);
const UpdateUserByID = (id, data) => axiosInstance.put(`/users/update/${id}`, data)

const getAllUsers = () => axiosInstance.get('/users/all')
const CreateUser = (name, email, password,role) => axiosInstance.post('/user/add', { name, email,password,role });


export { axiosInstance, SignUp,UserData,UpdateUserByID,getAllUsers,CreateUser, fetchUserData }