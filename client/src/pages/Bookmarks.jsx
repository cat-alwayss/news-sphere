import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import NewsCard from "../components/NewsCard";

function Bookmarks({ bookmarks, toggleBookmark }) {
  return (
    <div className="container">

      <Link to="/" className="back-home-btn">
        <FiArrowLeft />
        Back to Home
      </Link>

      <h1 className="section-title">
        ❤️ My Reading List
      </h1>

      <p className="section-subtitle">
        {bookmarks.length} saved article
        {bookmarks.length !== 1 ? "s" : ""}
      </p>

      {bookmarks.length === 0 ? (
        <div className="empty-bookmarks">
          <h2>📭 No saved articles yet</h2>

          <p>
            Bookmark your favourite news stories to
            read them later.
          </p>
        </div>
      ) : (
        <div className="news-grid">
          {bookmarks.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      )}

    </div>
  );
}

export default Bookmarks;