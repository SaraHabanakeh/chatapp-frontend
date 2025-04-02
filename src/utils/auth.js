// src/utils/auth.js

export const isLoggedIn = () => {
    return !!sessionStorage.getItem('authToken');
};

export const handleLogin = (userToken, userEmail, userName) => {
    sessionStorage.setItem('authToken', userToken);
    sessionStorage.setItem('userEmail', userEmail);
    sessionStorage.setItem('userName', userName);
};
