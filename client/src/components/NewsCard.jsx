import {
  FiClock,
  FiExternalLink,
  FiGlobe,
} from "react-icons/fi";

import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa";

import { formatDistanceToNow } from "date-fns";

const FALLBACK_IMAGE =
  "https://placehold.co/600x400/e2e8f0/475569?text=NewsSphere";

function NewsCard({
  article,
  bookmarks,
  toggleBookmark,
}) {
  const isBookmarked = bookmarks.some(
    (item) => item.url === article.url
  );

  const source =
    article.source?.name || "News Source";

  const description =
    article.description ||
    "Click below to read the complete article.";

  return (
    <article className="news-card">
      <div className="news-image-wrapper">
        <img
  src={article.image || "/news-placeholder.png"}
  alt={article.title}
  className="news-image"
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/news-placeholder.png";
  }}
/>

        <button
          className="bookmark-btn"
          onClick={() => toggleBookmark(article)}
          aria-label={
            isBookmarked
              ? "Remove bookmark"
              : "Add bookmark"
          }
        >
          {isBookmarked ? (
            <FaHeart color="#ef4444" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </div>

      <div className="news-content">
        <h2>{article.title}</h2>

        <p>{description}</p>

        <div className="news-meta">
          <span>
            <FiGlobe />
            {source}
          </span>

          <span>
            <FiClock />
            {formatDistanceToNow(
              new Date(article.publishedAt),
              {
                addSuffix: true,
              }
            )}
          </span>
        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Read full article"
        >
          Read Full Article

          <FiExternalLink />
        </a>
      </div>
    </article>
  );
}

export default NewsCard;