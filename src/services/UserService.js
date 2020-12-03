import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:8080/api/users';

class UserService {

    updateUser(userId, user) {
        return axios.put(`${API_URL}/${userId}`, user, {headers: authHeader()});
    }

    addToMyReadingList(userId, googleBook) {
        return axios.post(`${API_URL}/${userId}/reading-list`, googleBook, {headers: authHeader()});
    }




}

export default new UserService();