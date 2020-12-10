import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'https://secure-thicket-97069.herokuapp.com/api/email-subscriptions';

class EmailSubscriptionService {

    addSubscription(subscriptionRequest){
        return axios.post(API_URL, subscriptionRequest)
            .then(response => response.data);
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