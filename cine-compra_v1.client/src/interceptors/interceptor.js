import axios from 'axios'

const interceptor = () => {
    const updateHeader = (config) => {
        let user = localStorage.getItem('user')
        user = JSON.parse(user)

        try {
            if (user.token)
                config.headers.Authorization = `bearer ${user.token}`
                console.log('response local', user.message)
            return config
        } catch (error) {
            console.log("There was an error ", error);            
        }
    }

    axios.interceptors.request.use((request) => {
        console.log("Starting Request", request);
        if (request.url?.includes('login') || request.url?.includes('register') || request.url?.includes('account')) return request
        return updateHeader(request);
    });
}

export default interceptor;
