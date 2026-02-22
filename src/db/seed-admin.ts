import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import crypto from 'crypto';

dotenv.config({ path: '.env.local' });

function hashPassword(password: string): string {
    return crypto.createHash("sha256").update(password).digest("hex");
}

async function run() {
    const url = process.env.DATABASE_URL;
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!url || !adminEmail || !adminPassword) {
        console.error('Environment variables are not set');
        process.exit(1);
    }

    console.log('Connecting to database...');
    const connection = await mysql.createConnection(url);

    const hashedLabel = hashPassword(adminPassword);

    try {
        console.log(`Checking if admin user ${adminEmail} exists...`);
        const [rows]: any = await connection.execute('SELECT id FROM admin_users WHERE email = ?', [adminEmail]);

        if (rows.length > 0) {
            console.log('Admin user already exists. Updating password...');
            await connection.execute(
                'UPDATE admin_users SET password = ?, name = ?, role = ? WHERE email = ?',
                [hashedLabel, 'Super Admin', 'superadmin', adminEmail]
            );
        } else {
            console.log('Creating initial Super Admin...');
            await connection.execute(
                'INSERT INTO admin_users (name, email, password, role, permissions) VALUES (?, ?, ?, ?, ?)',
                ['Super Admin', adminEmail, hashedLabel, 'superadmin', JSON.stringify(['dashboard', 'berita', 'dosen', 'galeri', 'hero', 'testimonial', 'partner', 'kontak', 'pmb', 'settings', 'admins'])]
            );
        }
        console.log('Seed completed successfully.');
    } catch (err) {
        console.error('Seed failed:', err);
    } finally {
        await connection.end();
    }
}

run();
