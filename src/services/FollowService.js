import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'https://secure-thicket-97069.herokuapp.com/api/users';

class FollowService {

    createFollow(userId, followingId){
        return axios.post(`${API_URL}/${userId}/followings`,{"following": followingId}, {headers: authHeader()})
    }

    getAllFollowers(userId) {
        return axios.get(`${API_URL}/${userId}/followers`, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

    getAllFollowings(userId) {
        return axios.get(`${API_URL}/${userId}/followings`, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

    unfollow(userId, followingId) {
        return axios.delete(`${API_URL}/${userId}/followings/${followingId}`, {headers: authHeader()})
    }
}

export default new FollowService();
