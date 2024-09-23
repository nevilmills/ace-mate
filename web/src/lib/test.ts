import { config } from "dotenv";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env.local");
config({ path: envPath });
console.log("env result: ", process.env.DATABASE_URL);
