import axios from 'axios'
//const USER_BASE_REST_API_URL = 'http://localhost:8081';
const USER_BASE_REST_API_URL = 'https://user-information-app.herokuapp.com';
class UserService{

    getAllEmployees(){
        return axios.get(USER_BASE_REST_API_URL + '/users/getAll');
    }

    createUser(user)
    {
        return axios.post(USER_BASE_REST_API_URL + '/users/save', user);
    }
}

export default new UserService();