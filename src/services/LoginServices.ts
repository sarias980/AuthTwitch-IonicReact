import axios from "axios";
import Config from "../config";

const loginData = {
    "email": "",
    "password": ""
}

const APIData = axios.create({
    baseURL: "",
    headers: {
    }
});

export const GetLogin = async (email = "",password = "") => {
    const response = await APIData.get(Config.apiUrl);
    return response.data;
};