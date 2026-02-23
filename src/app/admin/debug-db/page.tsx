import { db } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export default async function DebugPage() {
    let status = "Checking...";
    let dbInfo = "";
    let sampleData = "";

    try {
        // Cek koneksi dan ambil info user/host saat ini dari MySQL
        const [info]: any = await db.execute(sql`SELECT USER() as user, DATABASE() as db`);
        dbInfo = JSON.stringify(info, null, 2);

        // Cek satu contoh data dari tabel site_config atau profile
        const [data]: any = await db.execute(sql`SELECT name FROM university_profile LIMIT 1`);
        sampleData = JSON.stringify(data, null, 2);

        status = "✅ Connected to Database";
    } catch (e: any) {
        status = "❌ Connection Failed";
        dbInfo = e.message;
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'monospace' }}>
            <h1>Database Debugger</h1>
            <hr />
            <p><strong>Status:</strong> {status}</p>
            <p><strong>Current Env DATABASE_URL:</strong> {process.env.DATABASE_URL ? "Defined (Hidden for safety)" : "NOT DEFINED"}</p>
            <p><strong>DB Connection Info:</strong></p>
            <pre style={{ background: '#f4f4f4', padding: '10px' }}>{dbInfo}</pre>
            <p><strong>Sample Row from university_profile:</strong></p>
            <pre style={{ background: '#f4f4f4', padding: '10px' }}>{sampleData}</pre>
            <hr />
            <p>Jika info di atas tidak sesuai dengan kredensial baru Anda, berarti Hostinger masih menggunakan cache env lama.</p>
        </div>
    );
}
