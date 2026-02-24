import * as dotenv from "dotenv";
import { join } from "path";
import mysql from "mysql2/promise";

dotenv.config({ path: join(process.cwd(), ".env.local") });

async function testDirect() {
    console.log("Testing direct connection parameters...");

    // Extracting from URL manually just for this test
    // mysql://u753967224_adminfhunpal:vC$491N#5di3@srv1786.hstgr.io:3306/u753967224_dbwebfh

    try {
        const connection = await mysql.createConnection({
            host: 'srv1786.hstgr.io',
            user: 'u753967224_adminfhunpal',
            password: 'vC$491N#5di3', // Raw password
            database: 'u753967224_dbwebfh',
            port: 3306
        });

        console.log("✅ Direct connection SUCCESSFULl!");
        await connection.end();
    } catch (error: any) {
        console.error("❌ Direct connection FAILED!");
        console.error(`- Code: ${error.code}`);
        console.error(`- Message: ${error.message}`);
    }
}

testDirect();
