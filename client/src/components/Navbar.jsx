function Navbar({
  selectedCategory,
  onCategorySelect,
  darkMode,
  setDarkMode,
}) {
  const categories = [
    "home",
    "technology",
    "sports",
    "business",
    "health",
    "science",
  ];

  return (
    <nav className="navbar">
      <h2
        className="logo"
        onClick={() => onCategorySelect("home")}
      >
        📰 NewsSphere
      </h2>

      <div className="nav-links">
        {categories.map((category) => (
          <button
            key={category}
            className={`nav-btn ${
              selectedCategory === category
                ? "active"
                : ""
            }`}
            onClick={() =>
              onCategorySelect(category)
            }
          >
            {category.charAt(0).toUpperCase() +
              category.slice(1)}
          </button>
        ))}

        <button
          className="theme-btn"
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;