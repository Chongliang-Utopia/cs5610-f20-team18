import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'https://secure-thicket-97069.herokuapp.com/api/users';

class UserService {
    findAllUsers() {
        return axios.get(`${API_URL}`, {headers: authHeader()})
            .then((response) => {
                return response.data;
            });
    }

    findUserById(userId) {
        return axios.get(`${API_URL}/${userId}`, {headers: authHeader()})
            .then((response) => {
                return response.data;
            });
    }

    updateUser(userId, user) {
        return axios.put(`${API_URL}/${userId}`, user, {headers: authHeader()});
    }

    addToMyReadingList(userId, googleBook) {
        return axios.post(`${API_URL}/${userId}/reading-list`, googleBook, {headers: authHeader()});
    }

    getFollowingsReadingList(userId) {
        return axios.get(`${API_URL}/${userId}/followings-reading-list`, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ));
    }

    getReadingListForUser(userId) {
        return axios.get(`${API_URL}/${userId}/reading-list`, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ));
    }

    deleteBookFromList(userId, googleBookId) {
        return axios.delete(`${API_URL}/${userId}/reading-list/${googleBookId}`, {headers: authHeader()})
    }
}

export default new UserService();
