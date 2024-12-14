import axios from 'axios';

const api = axios.create({
    baseURL: 'https://upnode.test/api',
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('server_token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export const loginWithPrivy = async (privyAccessToken: string, privyUser: object) => {
    try {
        const response = await api.post('/login', {
            access_token: privyAccessToken,
            user: privyUser,
        });
        const {token} = response.data;
        localStorage.setItem('server_token', token);
        return token;
    } catch (error) {
        console.error('Login Error:', error);
        throw error;
    }
};
