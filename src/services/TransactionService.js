import axios from 'axios';
import authHeader from './AuthHeader';

const API_TRANSACTION_URL = 'http://localhost:8080/api/transactions';
const API_USER_URL = 'http://localhost:8080/api/users';

class TransactionService{
    createBorrowRequest(borrowRequest) {
        return axios.post(API_TRANSACTION_URL, borrowRequest, {headers: authHeader()})
    }

    declineBorrowRequest(transactionId) {
        return axios.put(`${API_TRANSACTION_URL}/${transactionId}/decline`, {headers: authHeader()})
    }

    deleteBorrowRequest(transactionId) {
        return axios.delete(`${API_TRANSACTION_URL}/${transactionId}`, {headers: authHeader()})
    }

    getAllUserBorrowings(userId) {
        return axios.get(`${API_USER_URL}/${userId}/transactions/borrow`,{headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

    getAllUserLendings(userId) {
        return axios.get(`${API_USER_URL}/${userId}/transactions/lend`,{headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }
}

export default new TransactionService();
