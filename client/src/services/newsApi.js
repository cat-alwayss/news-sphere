import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Latest News
export const getLatestNews = async () => {
  const response = await API.get("/news/latest");
  return response.data;
};

// Search News
export const searchNews = async (query) => {
  const response = await API.get(`/news/search?q=${query}`);
  return response.data;
};

// Category News
export const getCategoryNews = async (category) => {
  const response = await API.get(`/news/category/${category}`);
  return response.data;
};