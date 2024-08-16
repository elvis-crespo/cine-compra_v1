import { useEffect, useState } from 'react'

export const useAuth = () => {
    let user = localStorage.getItem('user')
    user = JSON.parse(user);
    const [auth, setAuth] = useState({
        token: null,
        refreshToken: null,
        authenticated: false,
    });

    useEffect(() => {
        if (auth.token && auth.refreshToken) {
            const isAuthenticated = checkIfAuthenticated();
            setAuth({ ...auth, authenticated: isAuthenticated });
            console.log('auth', auth)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth.token, auth.refreshToken])

    const setTokens = (token, refreshToken) => {
        token = user.token;
        refreshToken = user.refreshToken;
        setAuth({
            token,
            refreshToken,
            isAuthenticated: true
        });
    }

    const removeTokens = () => {
        localStorage.removeItem('user')
        setAuth({
            token: null,
            refreshToken: null,
            isAuthenticated: false
        });
    }

    // const fechaActualUTC = new Date();
    // const fechaActualUTCString = fechaActualUTC.toISOString(); // Convierte la fecha y hora a una cadena en formato ISO (UTC)

    const checkIfAuthenticated = () => {
        if (user) {
            const token = user ? user.token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI5IiwibmJmIjoxNzA5NDQwMjExLCJleHAiOjE3MDk0NDAzMzEsImlhdCI6MTcwOTQ0MDIxMX0.JaNr35SseqSRrCmkw3k4nI4mkpq4gKl_BawDzgrrd0g';
            console.log('token', token)
            if (!token) return false;

            const decodedTokens = decodeToken(token);
            if (!decodedTokens) return false

            const currentTime = Math.floor(new Date().getTime() / 1000);
            parseInt(decodedTokens.exp);
            console.log('mi token expira en', decodedTokens.exp, 'y son las ', currentTime)
            if (currentTime > decodedTokens.exp) {
                return false
            }
            return true;
        }else{
            return false;
        }
    };
    
    function decodeToken(str) {
        // const parts = str.split('.');
        // const decoded = atob(parts[1]);
        // const padding = decoded.length % 4;
        // const paddedDecoded = padding ? decoded + '='.repeat(4 - padding) : decoded;
        // const base64Decoded = decodeURIComponent(escape(paddedDecoded));
        // const jsonString = JSON.stringify(base64Decoded);
        // return JSON.parse(jsonString);
        str = str.split('.')[1];
        str = str.replace('/-/g', '+');
        str = str.replace('/_/g', '/');
        switch (str.length % 4) {
            case 0:
                break;
            case 2:
                str += '==';
                break;
            case 3:
                str += '=';
                break;
            default:
                throw 'Invalid token';
        }

        str = (str + '===').slice(0, str.length + (str.length % 4));
        str = str.replace(/-/g, '+').replace(/_/g, '/');

        str = decodeURIComponent((atob(str)));

        str = JSON.parse(str);
        return str;
    }

    return { auth, setTokens, removeTokens, checkIfAuthenticated };
}
