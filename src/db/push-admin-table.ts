import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: '.env.local' });

async function run() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        console.error('DATABASE_URL is not set');
        process.exit(1);
    }

    console.log('Connecting to database...');
    const connection = await mysql.createConnection(url);

    const sql = `
    CREATE TABLE IF NOT EXISTS \`admin_users\` (
        \`id\` int AUTO_INCREMENT NOT NULL,
        \`name\` varchar(255) NOT NULL,
        \`email\` varchar(191) NOT NULL,
        \`password\` varchar(255) NOT NULL,
        \`role\` varchar(50) NOT NULL DEFAULT 'staff',
        \`permissions\` text,
        \`is_active\` boolean NOT NULL DEFAULT true,
        \`created_at\` timestamp DEFAULT CURRENT_TIMESTAMP,
        CONSTRAINT \`admin_users_id\` PRIMARY KEY(\`id\`),
        CONSTRAINT \`admin_users_email_unique\` UNIQUE(\`email\`)
    );
    `;

    try {
        console.log('Creating admin_users table...');
        await connection.execute(sql);
        console.log('Table admin_users created successfully (or already exists).');
    } catch (err) {
        console.error('Failed to create table:', err);
    } finally {
        await connection.end();
    }
}

run();
