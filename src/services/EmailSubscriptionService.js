import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:8080/api/email-subscriptions';

class EmailSubscriptionService {

    addSubscription(subscriptionRequest){
        return axios.post(API_URL, subscriptionRequest)
    }

    findAllSubscriptions(){
        return axios.get(API_URL, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

    unSubscribe(subscriptionId){
        return axios.delete(`${API_URL}/${subscriptionId}`, {headers: authHeader()})
    }

}

export default new EmailSubscriptionService();