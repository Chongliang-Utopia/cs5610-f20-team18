import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'https://secure-thicket-97069.herokuapp.com/api/reports';

class ReportService{
    createReport(report){
        return axios.post(API_URL, report, {headers: authHeader()})
    }

    getAllReports(){
        return axios.get(API_URL, {headers: authHeader()})
            .then((response) => (
                response.data ? response.data : []
            ))
    }

    deleteReport(reportId){
        return axios.delete(`${API_URL}/${reportId}`, {headers: authHeader()})
    }
}

export default new ReportService();
