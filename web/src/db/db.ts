import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from "./schema";
import path from "path";

const envPath = path.resolve(__dirname, "../../.env.local");
config({ path: envPath });

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
