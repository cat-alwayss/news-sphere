import axios from "axios";

export async function fetchWeather(apiKey) {
  const city = "Bengaluru";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const { data } = await axios.get(url);

  return {
    city: data.name,
    country: data.sys.country,
    temperature: Math.round(data.main.temp),
    humidity: data.main.humidity,
    wind: data.wind.speed,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
  };
}