import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";
import dotenv from "dotenv";

// Manual loading as fallback for Hostinger
if (!process.env.DATABASE_URL) {
    dotenv.config(); // Coba load .env
    dotenv.config({ path: ".env.local" }); // Coba load .env.local
}

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    console.error("❌ CRITICAL: DATABASE_URL tidak ditemukan di process.env!");
    console.error("Manual loading juga gagal.");
}

// Mencegah crash jika URL tidak valid saat inisialisasi modul
const poolConnection = mysql.createPool(databaseUrl || "mysql://placeholder:placeholder@localhost:3306/placeholder");

export const db = drizzle(poolConnection, { schema, mode: "default" });
