import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import app from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// explicitly load ../.env from the server root
console.log("Current working directory:", process.cwd());
const envPath = path.resolve(__dirname, "../.env");
console.log("Trying to load:", envPath);

const result = dotenv.config({ path: envPath });

console.log(result);

const PORT = process.env.PORT || 5000;

console.log("Loaded GNEWS_API_KEY:", process.env.GNEWS_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});