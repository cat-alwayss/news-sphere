function TrendingTopics({ onCategorySelect }) {
  const topics = [
    "technology",
    "business",
    "sports",
    "health",
    "science",
    "world",
    "entertainment",
  ];

  return (
    <section className="trending-topics">

      <h2 className="trending-title">
        🔥 Trending Categories
      </h2>

      <p className="trending-subtitle">
        Explore the latest stories from your favourite topics.
      </p>

      <div className="topics-container">
        {topics.map((topic) => (
          <button
            key={topic}
            className="topic-btn"
            onClick={() => onCategorySelect(topic)}
          >
            {topic.charAt(0).toUpperCase() +
              topic.slice(1)}
          </button>
        ))}
      </div>

    </section>
  );
}

export default TrendingTopics;