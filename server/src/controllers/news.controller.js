import {
  fetchLatestNews,
  searchNews,
  fetchCategoryNews,
} from "../services/news.service.js";

/**
 * Get latest top headlines
 */
export async function getLatestNews(req, res) {
  try {
    const articles = await fetchLatestNews(process.env.GNEWS_API_KEY);

    res.status(200).json({
      success: true,
      data: articles,
    });
  } catch (error) {
    console.error("Error fetching latest news:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch latest news",
      error: error.response?.data || error.message,
    });
  }
}

/**
 * Search news by keyword
 */
export async function getSearchNews(req, res) {
  try {
    const query = req.query.q;

    // Check if the user entered a search keyword
    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Search query is required.",
      });
    }

      const articles = await searchNews(
    query,
    process.env.GNEWS_API_KEY
  );

    res.status(200).json({
      success: true,
      data: articles,
    });
  } catch (error) {
    console.error("Error searching news:", error);

    res.status(500).json({
      success: false,
      message: "Failed to search news",
      error: error.response?.data || error.message,
    });
  }
}
export async function getCategoryNews(req, res) {
  try {
    const category = req.params.category;

    const articles = await fetchCategoryNews(
      category,
      process.env.GNEWS_API_KEY
    );

    res.json({
      success: true,
      data: articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch category news",
    });
  }
}