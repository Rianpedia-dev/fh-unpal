import * as dotenv from "dotenv";
import { join } from "path";
import mysql from "mysql2/promise";

// Memuat .env.local secara eksplisit
dotenv.config({ path: join(process.cwd(), ".env.local") });

async function verify() {
    const url = process.env.DATABASE_URL;

    console.log("--------------------------------------------------");
    console.log("🚀 MEMULAI VERIFIKASI KONEKSI DATABASE ONLINE");
    console.log("--------------------------------------------------");

    if (!url) {
        console.error("❌ ERROR: DATABASE_URL tidak ditemukan di .env.local!");
        process.exit(1);
    }

    try {
        console.log("📡 Menghubungkan ke Host: srv1786.hstgr.io...");

        const pool = mysql.createPool({
            uri: url,
            connectTimeout: 10000, // 10 detik timeout
        });

        const startTime = Date.now();
        const [rows] = await pool.execute("SELECT 1 as test");
        const duration = Date.now() - startTime;

        console.log("✅ KONEKSI BERHASIL!");
        console.log(`⏱️  Waktu respon: ${duration}ms`);
        console.log("📊 Hasil Query Test:", rows);

        // Cek struktur tabel minimal (opsional)
        try {
            const [tables]: any = await pool.execute("SHOW TABLES");
            console.log(`ia Terdeteksi ${tables.length} tabel di database.`);
        } catch (e) {
            console.log("ℹ️ Tidak dapat mengambil daftar tabel, tapi koneksi inti OK.");
        }

        await pool.end();
        console.log("--------------------------------------------------");
        process.exit(0);
    } catch (error: any) {
        console.error("❌ KONEKSI GAGAL!");
        console.error("--------------------------------------------------");
        console.error("Detail Error:");
        console.error(`- Code: ${error.code}`);
        console.error(`- Error No: ${error.errno}`);
        console.error(`- Message: ${error.message}`);
        console.error("--------------------------------------------------");

        if (error.code === 'ETIMEDOUT') {
            console.error("💡 SARAN: Timeout terjadi. Pastikan Whitelist IP di Hostinger sudah diatur ke 'Any IP' (0.0.0.0).");
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error("💡 SARAN: Akses ditolak. Periksa kembali username dan password di .env.local.");
        }

        process.exit(1);
    }
}

verify();
