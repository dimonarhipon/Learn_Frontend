
export const setToken = (token) => localStorage.setItem('token', token);

export const removeToken = () => localStorage.removeItem('token');

export const clearStorage = () => localStorage.clear();


export const getToken = () => localStorage.getItem('token') || undefined;

const token = getToken();
export const hasToken = token ? token.trim() !== '' : false;


export const getKeyAtIndex = (index) => localStorage.key(index);
const firstKey = getKeyAtIndex(0);

export const getStorageLength = () => localStorage.length;
const storageLength = getStorageLength();
console.log(storageLength);


export const getAllKeyStorage = () => {
  const keys = Object.keys(localStorage);
  for (let key of keys) {
    console.log(`${key}: ${localStorage.getItem(key)}`);
  }
};





export const setSessionToken = (token) => sessionStorage.setItem('token', token);

export const getSessionToken = () => sessionStorage.getItem('token');

export const removeSessionToken = () => sessionStorage.removeItem('token');

export const clearSessionStorage = () => sessionStorage.clear();











const hasTokenInLocalStorage = () => {
	const token = localStorage.getItem('token');

	if (token) {
			return token.trim() !== '';
	}

	return false;
};

export default hasTokenInLocalStorage;






import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Routes } from 'routers/constants';

import { checkTokenAlive } from '../api';

import useGetUser from './useGetUser';

const TOKEN_ALIVE_CHECK_TIME = 60_000;

const useCheckTokenAlive = () => {
    const { user } = useGetUser();
    const navigate = useNavigate();

    useEffect(() => {
        let timeoutId: number;

        const handleTokenAliveCheck = async () => {
            const token = localStorage.getItem('token');

            if (token && token !== '') {
                try {
                    await checkTokenAlive();
                    if (user && Object.keys(user).length > 0) {
                        setTokenAliveCheckTimeout();
                    }
                } catch (err) {
                    localStorage.removeItem('token');
                    navigate(Routes.SignIn)
                }
            }
        };

        const setTokenAliveCheckTimeout = () => {
            timeoutId = setTimeout(handleTokenAliveCheck, TOKEN_ALIVE_CHECK_TIME);
        };

        handleTokenAliveCheck();

        return () => {
            clearTimeout(timeoutId);
        };
    }, [user]);
};
