import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUser = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/user`);
        // console.log(response.data.user);
        return response.data.user;
    } catch (error) {
        console.error(error);
        throw error;
    }
}