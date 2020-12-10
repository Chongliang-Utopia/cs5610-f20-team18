import axios from 'axios';
import authHeader from './AuthHeader';

const API_TRANSACTION_URL = 'https://secure-thicket-97069.herokuapp.com/api/transactions';
const API_USER_URL = 'https://secure-thicket-97069.herokuapp.com/api/users';
const API_REVIEW_URL = 'https://secure-thicket-97069.herokuapp.com/api/reviews';

class ReviewService{
    createReviewAsBorrower(transactionId, newReview){
        return axios.post(`${API_TRANSACTION_URL}/${transactionId}/reviews/borrower`, newReview,{headers: authHeader()})
    }

    createReviewAsLender(transactionId, newReview){
        return axios.post(`${API_TRANSACTION_URL}/${transactionId}/reviews/lender`, newReview,{headers: authHeader()})
    }

    updateReview(reviewId, newReview) {
        return axios.put(`${API_REVIEW_URL}/${reviewId}`, newReview,{headers: authHeader()})
    }

    deleteReview(reviewId){
        return axios.delete(`${API_REVIEW_URL}/${reviewId}`,{headers: authHeader()})
    }

    findReviewsUserReceived(userId) {
        return axios.get(`${API_USER_URL}/${userId}/reviews/reviewee`, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

    findReviewsUserGave(userId) {
        return axios.get(`${API_USER_URL}/${userId}/reviews/reviewer`, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

}

export default new ReviewService();
