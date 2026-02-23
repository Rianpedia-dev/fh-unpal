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

// Debugging sederhana untuk melihat apakah env terbaca (hanya di console server)
if (databaseUrl) {
    console.log("📍 DATABASE_URL terdeteksi di server.");
} else {
    console.error("❌ DATABASE_URL TIDAK TERDETEKSI di server!");
}

// Gunakan placeholder yang aman agar tidak crash saat inisialisasi modul
let poolConnection;
try {
    if (databaseUrl) {
        poolConnection = mysql.createPool({
            uri: databaseUrl,
            connectionLimit: 1, // Hemat koneksi di shared hosting
            connectTimeout: 5000, // Jangan biarkan aplikasi hang
        });
    } else {
        // Fallback ke placeholder agar objek db tetap tercipta tapi query akan gagal dengan rapi
        poolConnection = mysql.createPool("mysql://invalid:invalid@localhost:3306/invalid");
    }
} catch (err) {
    console.error("🔥 Gagal menginisialisasi MySQL Pool:", err);
    poolConnection = mysql.createPool("mysql://invalid:invalid@localhost:3306/invalid");
}

export const db = drizzle(poolConnection, { schema, mode: "default" });
