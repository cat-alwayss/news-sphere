import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export async function getWeather() {
  const response = await API.get("/weather");
  return response.data;
}