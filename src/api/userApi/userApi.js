import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user`);
        // console.log(response.data);
        return response.data.user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateUserProfile = async (updatedProfile) => {
    try {
        const response = await axios.patch(`${BASE_URL}/profile`, updatedProfile, { headers: { 'Content-Type': 'multipart/form-data' } });
        // console.log("backend", response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}