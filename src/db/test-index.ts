import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
console.log("DATABASE_URL length:", process.env.DATABASE_URL?.length || 0);
import { db } from "./index";

async function main() {
    console.log("Testing connection via index.ts...");
    try {
        const result = await db.execute("SELECT 1");
        console.log("Connection success!");
    } catch (e) {
        console.error("Connection failed:", e);
    }
}
main();
