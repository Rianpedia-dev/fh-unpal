import { writeFile, unlink, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { existsSync } from "node:fs";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");

/**
 * Menyimpan file ke public/uploads
 * @param file Objek File dari FormData
 * @param subFolder Subfolder opsional (misal: "news", "dosen")
 * @returns Path relatif file (misal: /uploads/news/nama-file.jpg)
 */
export async function saveFile(file: File, subFolder: string = ""): Promise<string> {
    if (!file) throw new Error("No file uploaded");

    const targetDir = subFolder ? join(UPLOAD_DIR, subFolder) : UPLOAD_DIR;

    // Pastikan direktori target ada
    if (!existsSync(targetDir)) {
        await mkdir(targetDir, { recursive: true });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Buat nama file unik
    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.]/g, "-");
    const fileName = `${timestamp}-${cleanFileName}`;
    const path = join(targetDir, fileName);

    await writeFile(path, buffer);
    return subFolder ? `/uploads/${subFolder}/${fileName}` : `/uploads/${fileName}`;
}

/**
 * Menghapus file dari filesystem jika berada di folder uploads
 * @param filePath Path relatif atau absolut file
 */
export async function deleteFile(filePath: string) {
    if (!filePath || !filePath.startsWith("/uploads/")) return;

    try {
        const absolutePath = join(process.cwd(), "public", filePath);
        if (existsSync(absolutePath)) {
            await unlink(absolutePath);
            console.log(`Successfully deleted file: ${absolutePath}`);
        }
    } catch (error) {
        console.error(`Error deleting file: ${filePath}`, error);
    }
}
