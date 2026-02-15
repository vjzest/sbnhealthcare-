import axios from 'axios';

export const getDynamicMetadata = async (pageId: string) => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/seo/${pageId}`);
        if (response.data.success) {
            return response.data.data;
        }
        return null;
    } catch (error) {
        return null;
    }
};
