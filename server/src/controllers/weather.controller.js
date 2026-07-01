import { fetchWeather } from "../services/weather.service.js";

export async function getWeather(req, res) {
  try {
    const weather = await fetchWeather(
      process.env.WEATHER_API_KEY
    );

    res.json({
      success: true,
      data: weather,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch weather",
    });
  }
}