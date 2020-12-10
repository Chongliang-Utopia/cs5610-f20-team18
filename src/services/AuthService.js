import axios from "axios";

const API_URL = "https://secure-thicket-97069.herokuapp.com/api/auth/";

class AuthService {
    login(email, password) {
        return axios
            .post(`${API_URL}signin`, { email, password })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(email, password) {
        return axios.post(`${API_URL}signup`, {
            email,
            password,
        })
            .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
    }

    loginWithGoogle(idToken) {
        return axios
            .post(`${API_URL}signinwithgoogle`, {}, {headers: {'x-access-token': idToken}})
            .then((response) => {
                if (response.data.user.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                }

                return response.data;
            });
    }
}

export default new AuthService();