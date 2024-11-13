import axios from 'axios';

export const getLatestJobs = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/job/latest`);

        return response.data.content;
    } catch (error) {
        console.log(error);
    }
};
export const getJobDetails = async (jobId: string) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/job/get-details/${jobId}`);

        return response.data.content;
    } catch (error) {
        console.log(error);
    }
};
