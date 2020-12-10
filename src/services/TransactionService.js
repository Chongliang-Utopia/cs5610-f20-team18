import axios from 'axios';
import authHeader from './AuthHeader';

const API_TRANSACTION_URL = 'https://secure-thicket-97069.herokuapp.com/api/transactions';
const API_USER_URL = 'https://secure-thicket-97069.herokuapp.com/api/users';

class TransactionService{
    createBorrowRequest(borrowRequest) {
        return axios.post(API_TRANSACTION_URL, borrowRequest, {headers: authHeader()})
    }

    declineBorrowRequest(transactionId, transaction) {
        return axios.put(`${API_TRANSACTION_URL}/${transactionId}/decline`, transaction, {headers: authHeader()})
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

    acceptBorrowRequest(transactionId, transaction) {
        return axios.put(`${API_TRANSACTION_URL}/${transactionId}/accept`, transaction, {headers: authHeader()})
    }

    returnBook(transactionId, transaction) {
        return axios.put(`${API_TRANSACTION_URL}/${transactionId}/return`, transaction, {headers: authHeader()})
    }
}

export default new TransactionService();
