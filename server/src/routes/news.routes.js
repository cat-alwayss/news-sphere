import express from "express";

import {
  getLatestNews,
  getSearchNews,
  getCategoryNews,
} from "../controllers/news.controller.js";

const router = express.Router();

// Get latest news
router.get("/latest", getLatestNews);

// Search news
router.get("/search", getSearchNews);

// Category news
router.get("/category/:category", getCategoryNews);

export default router;