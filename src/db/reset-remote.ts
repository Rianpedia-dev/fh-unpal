import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import mysql from "mysql2/promise";

async function resetDatabase() {
    const url = process.env.DATABASE_URL;
    if (!url) {
        console.error("DATABASE_URL is not set");
        process.exit(1);
    }

    console.log("Connecting to:", url.split("@")[1]); // Hide credentials

    const connection = await mysql.createConnection(url);

    try {
        const [rows]: any = await connection.query("SHOW TABLES");
        const tables = rows.map((row: any) => Object.values(row)[0]);

        if (tables.length === 0) {
            console.log("No tables found in database.");
            return;
        }

        console.log(`Found ${tables.length} tables. Dropping...`);

        // Disable foreign key checks
        await connection.query("SET FOREIGN_KEY_CHECKS = 0");

        for (const table of tables) {
            console.log(`Dropping table: ${table}`);
            await connection.query(`DROP TABLE IF EXISTS \`${table}\``);
        }

        // Re-enable foreign key checks
        await connection.query("SET FOREIGN_KEY_CHECKS = 1");

        console.log("Database reset successfully.");
    } catch (error) {
        console.error("Error resetting database:", error);
    } finally {
        await connection.end();
    }
}

resetDatabase();
