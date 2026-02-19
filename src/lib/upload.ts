import { writeFile } from "fs/promises";
import { join } from "path";
import { existsSync, mkdirSync } from "fs";

/**
 * Utility to save an uploaded file to the public/uploads directory.
 * @param file The file from FormData
 * @param folder Optional subfolder inside uploads (e.g. 'dosen', 'galeri')
 * @returns The relative path to the saved file or null if failed
 */
export async function uploadImage(file: File | null, folder: string = ""): Promise<string | null> {
    if (!file || file.size === 0 || !(file instanceof File)) {
        return null;
    }

    // Basic validation
    if (!file.type.startsWith("image/")) {
        throw new Error("File harus berupa gambar.");
    }

    if (file.size > 5 * 1024 * 1024) {
        throw new Error("Ukuran gambar maksimal 5MB.");
    }

    try {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Prepare directory
        const uploadDir = join(process.cwd(), "public", "uploads", folder);
        if (!existsSync(uploadDir)) {
            mkdirSync(uploadDir, { recursive: true });
        }

        // Generate unique filename
        const timestamp = Date.now();
        const sanitizedName = file.name.replace(/\s+/g, "-").toLowerCase();
        const fileName = `${timestamp}-${sanitizedName}`;
        const path = join(uploadDir, fileName);

        // Save file
        await writeFile(path, buffer);

        // Return relative path for database storage
        return folder ? `/uploads/${folder}/${fileName}` : `/uploads/${fileName}`;
    } catch (error) {
        console.error("Error uploading image:", error);
        return null;
    }
}
