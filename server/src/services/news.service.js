import axios from "axios";
import cache from "../utils/cache.js";

const BASE_URL = "https://gnews.io/api/v4";

/**
 * Fetch Latest News
 */
export async function fetchLatestNews(apiKey) {
  const cacheKey = "latest-news";

  // Return cached data if available
  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log("✅ Latest news served from cache");
    return cachedData;
  }

  const url = `${BASE_URL}/top-headlines?lang=en&max=12&apikey=${apiKey}`;

  const { data } = await axios.get(url);

  const articles = data.articles || [];

  cache.set(cacheKey, articles);

  console.log("🌍 Latest news fetched from GNews API");

  return articles;
}

/**
 * Search News
 */
export async function searchNews(query, apiKey) {
  const cacheKey = `search-${query.toLowerCase()}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log(`✅ Search "${query}" served from cache`);
    return cachedData;
  }

  const url = `${BASE_URL}/search?q=${encodeURIComponent(
    query
  )}&lang=en&max=12&apikey=${apiKey}`;

  const { data } = await axios.get(url);

  const articles = data.articles || [];

  cache.set(cacheKey, articles);

  console.log(`🌍 Search "${query}" fetched from GNews API`);

  return articles;
}

/**
 * Fetch Category News
 */
export async function fetchCategoryNews(category, apiKey) {
  const cacheKey = `category-${category}`;

  const cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log(`✅ ${category} served from cache`);
    return cachedData;
  }

  const url = `${BASE_URL}/top-headlines?category=${category}&lang=en&max=12&apikey=${apiKey}`;

  const { data } = await axios.get(url);

  const articles = data.articles || [];

  cache.set(cacheKey, articles);

  console.log(`🌍 ${category} fetched from GNews API`);

  return articles;
}