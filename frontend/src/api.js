// api.js

const API_URL = 'http://localhost:5000/api/history'; // Adjust to your backend URL

export const getTranslationHistory = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            credentials: 'include', // Include cookies for authentication if needed
        });
        if (!response.ok) throw new Error('Failed to fetch history');
        const data = await response.json();
        return data; // Adjust according to your API response structure
    } catch (error) {
        console.error(error);
        return [];
    }
};
