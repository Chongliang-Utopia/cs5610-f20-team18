import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:8080/api/users';

class UserService {

    updateUser(userId, user) {
        return axios.put(`${API_URL}/${userId}`, user,{ headers: authHeader()});
}

    getPublicContent() {
        return axios.get(`${API_URL}/all`);
    }

    getUserBoard() {
        return axios.get(`${API_URL}/user`, { headers: authHeader() });
    }

    getAdminBoard() {
        return axios.get(`${API_URL}/admin`, { headers: authHeader() });
    }
}

export default new UserService();