import express from "express";
import cors from "cors";
import morgan from "morgan";

import newsRoutes from "./routes/news.routes.js";
import weatherRoutes from "./routes/weather.routes.js";

const app = express();

app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",
  })
);

app.use(express.json());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    message: "News API is running",
  });
});

// News Routes
app.use("/api/news", newsRoutes);

// Weather Routes
app.use("/api/weather", weatherRoutes);

export default app;