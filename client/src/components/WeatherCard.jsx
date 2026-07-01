import { WiDaySunny } from "react-icons/wi";

function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <section className="weather-card">
      <div className="weather-left">
        <h2>{weather.city}</h2>

        <p>Current Weather</p>
      </div>

      <div className="weather-right">
        <WiDaySunny className="weather-icon" />

        <div className="temperature">
          {Math.round(weather.temperature)}°C
        </div>

        <div className="condition">
          {weather.description}
        </div>
      </div>
    </section>
  );
}

export default WeatherCard;