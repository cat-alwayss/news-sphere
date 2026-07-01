import { useState } from "react";
import {
  FiSearch,
  FiTrendingUp,
  FiCheckCircle,
} from "react-icons/fi";

const popularTopics = [
  "AI",
  "Apple",
  "Space",
  "Bitcoin",
  "Cricket",
];

function Hero({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    if (search.trim() !== "") {
      onSearch(search);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="hero">

      <span className="hero-badge">
        🔥 LIVE NEWS
      </span>

      <h1>
        Stay Updated with Today's Biggest Stories
      </h1>

      <p>
        Discover breaking news from trusted sources
        around the world. Search millions of articles
        covering Technology, Business, Sports,
        Health, Science and more.
      </p>

      <div className="search-box">

        <div className="search-input">

          <FiSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
          />

        </div>

        <button onClick={handleSearch}>
          Search
        </button>

      </div>

      <div className="hero-trending">

        <FiTrendingUp />

        <span>Trending:</span>

        {popularTopics.map((topic) => (
          <button
            key={topic}
            onClick={() => onSearch(topic)}
          >
            {topic}
          </button>
        ))}

      </div>

      <div className="hero-footer">

        <FiCheckCircle />

        <span>
          Trusted by readers worldwide
        </span>

      </div>

    </section>
  );
}

export default Hero;