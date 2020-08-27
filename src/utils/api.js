import axios from "axios";

const randomUserURL = "https://randomuser.me/api/?results=50&nat=us";
export default {
    searchEmployees: function () {
        return axios.get(randomUserURL);
    }
};