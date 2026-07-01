import {
  FiClock,
  FiExternalLink,
  FiGlobe,
} from "react-icons/fi";

import { formatDistanceToNow } from "date-fns";

function FeaturedNews({ article }) {
  if (!article) return null;

  const source =
    article.source?.name || "News Source";

  return (
    <section className="featured-news">

      <div className="featured-image">

        <img
  src={article.image || "/news-placeholder.png"}
  alt={article.title}
  onError={(e) => {
    e.target.onerror = null;
    e.target.src = "/news-placeholder.png";
  }}
/>

      </div>

      <div className="featured-content">

        <span className="featured-tag">
          🔥 FEATURED STORY
        </span>

        <h2>
          {article.title}
        </h2>

        <p className="featured-description">
          {article.description}
        </p>

        <div className="featured-meta">

          <div>

            <FiGlobe />

            <span>{source}</span>

          </div>

          <div>

            <FiClock />

            <span>
              {formatDistanceToNow(
                new Date(article.publishedAt),
                {
                  addSuffix: true,
                }
              )}
            </span>

          </div>

        </div>

        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="featured-button"
        >
          Read Full Story

          <FiExternalLink />

        </a>

      </div>

    </section>
  );
}

export default FeaturedNews;