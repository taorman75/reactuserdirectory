import axios from "axios";


export default {
    searchEmployees: function () {
        return axios.get("https://randomuser.me/api/?results=50&nat=us");
    }
};