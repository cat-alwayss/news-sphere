import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeatherCard from "./components/WeatherCard";
import FeaturedNews from "./components/FeaturedNews";
import TrendingTopics from "./components/TrendingTopics";
import NewsCard from "./components/NewsCard";
import Footer from "./components/Footer";

import {
  getLatestNews,
  getCategoryNews,
  searchNews,
} from "./services/newsApi";

import { getWeather } from "./services/weatherApi";

function App() {
  const [articles, setArticles] = useState([]);
  const [weather, setWeather] = useState(null);

  const [selectedCategory, setSelectedCategory] =
    useState("home");

  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ❤️ Bookmarks
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  // Save bookmarks
  useEffect(() => {
    localStorage.setItem(
      "bookmarks",
      JSON.stringify(bookmarks)
    );
  }, [bookmarks]);

  // Dark Mode
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Latest News
  async function loadLatestNews() {
    try {
      setLoading(true);
      setError("");

      const response = await getLatestNews();

      setArticles(response.data);
    } catch (err) {
      console.error(err);
      setError(
        "Unable to load latest news. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  // Weather
  async function loadWeather() {
    try {
      const response = await getWeather();
      setWeather(response.data);
    } catch (err) {
      console.error(err);
    }
  }

  // Initial Load
  useEffect(() => {
    loadLatestNews();
    loadWeather();
  }, []);

  // Category
  async function handleCategory(category) {
    setSelectedCategory(category);

    try {
      setLoading(true);
      setError("");

      if (category === "home") {
        const response = await getLatestNews();
        setArticles(response.data);
      } else {
        const response =
          await getCategoryNews(category);

        setArticles(response.data);
      }
    } catch (err) {
      console.error(err);
      setError(
        "Unable to load this category."
      );
    } finally {
      setLoading(false);
    }
  }

  // Search
  async function handleSearch(query) {
    try {
      setLoading(true);
      setError("");

      const response =
        await searchNews(query);

      setArticles(response.data);
    } catch (err) {
      console.error(err);
      setError("Search failed.");
    } finally {
      setLoading(false);
    }
  }

  // Bookmark
  function toggleBookmark(article) {
    const exists = bookmarks.some(
      (item) => item.url === article.url
    );

    if (exists) {
      setBookmarks(
        bookmarks.filter(
          (item) => item.url !== article.url
        )
      );
    } else {
      setBookmarks([
        ...bookmarks,
        article,
      ]);
    }
  }

  return (
    <>
      <Navbar
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategory}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="container">
        <Hero onSearch={handleSearch} />

        <WeatherCard weather={weather} />

        {loading && (
          <div className="status-message">
            Loading latest news...
          </div>
        )}

        {!loading && error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {!loading &&
          !error &&
          articles.length > 0 && (
            <>
              <FeaturedNews
                article={articles[0]}
              />

              <TrendingTopics
                onCategorySelect={
                  handleCategory
                }
              />

              <h2 className="section-title">
                📰 Latest Headlines
              </h2>

              <p className="section-subtitle">
                Stay informed with today's
                top stories from around the
                world.
              </p>

              <div className="news-grid">
                {articles
                  .slice(1)
                  .map(
                    (
                      article,
                      index
                    ) => (
                      <NewsCard
                        key={index}
                        article={article}
                        bookmarks={
                          bookmarks
                        }
                        toggleBookmark={
                          toggleBookmark
                        }
                      />
                    )
                  )}
              </div>
            </>
          )}
      </div>

      <Footer />
    </>
  );
}

export default App;