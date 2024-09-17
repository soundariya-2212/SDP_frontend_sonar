import axios from 'axios';

const API_URL = 'http://localhost:8080/courses';

export const fetchCurrentCourseId = async () => {
    try {
        const response = await axios.get(`${API_URL}/current`);
        return response.data;
    } catch (error) {
        console.error('Error fetching current course ID:', error);
        throw error;
    }
};
