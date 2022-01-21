import axios from "axios";

const BASE_URL = "http://localhost:8000";
const value = {
    status: "",
    response: "",
}

const VaccineStatus = (e) => {

    e.preventDefault()

    const config = {
        method: 'post',
        url: `${BASE_URL}/requestvaksin/login`,
        data : user
    };

}