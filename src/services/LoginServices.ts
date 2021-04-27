import axios from "axios";

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
    const response = await APIData.get(``);
    return response.data;
};