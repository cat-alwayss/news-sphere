import axios from "axios";

const API = axios.create({
  baseURL: "https://news-sphere-api.onrender.com/api",
});

export async function getWeather() {
  const response = await API.get("/weather");
  return response.data;
}
