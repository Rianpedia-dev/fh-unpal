import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    console.error("❌ DATABASE_URL is not defined in environment variables!");
}

const poolConnection = mysql.createPool(databaseUrl || "");

export const db = drizzle(poolConnection, { schema, mode: "default" });
