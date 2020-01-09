import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://optimal-airbnb-pricing-api.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};