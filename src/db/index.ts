import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    console.error("❌ CRITICAL: DATABASE_URL tidak ditemukan di process.env!");
    console.error("Pastikan variabel sudah diatur di Panel Hostinger atau file .env di server.");
}

// Mencegah crash jika URL tidak valid saat inisialisasi modul
const poolConnection = mysql.createPool(databaseUrl || "mysql://placeholder:placeholder@localhost:3306/placeholder");

export const db = drizzle(poolConnection, { schema, mode: "default" });
