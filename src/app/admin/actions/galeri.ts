"use server";

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { uploadImage } from "@/lib/upload";

export async function createGaleri(formData: FormData) {
    const file = formData.get("image") as File;
    const uploadedPath = await uploadImage(file, "galeri");

    await db.insert(schema.gallery)
        .values({
            title: formData.get("title") as string,
            category: formData.get("category") as "Akademik" | "Kemahasiswaan" | "Seremonial",
            imageUrl: uploadedPath || (formData.get("imageUrl") as string) || "/images/gallery/placeholder.jpg",
            date: formData.get("date") as string,
        });

    revalidatePath("/admin/galeri");
    revalidatePath("/galeri");
    redirect("/admin/galeri");
}

export async function updateGaleri(formData: FormData) {
    const id = Number(formData.get("id"));
    const file = formData.get("image") as File;
    const uploadedPath = await uploadImage(file, "galeri");

    const updateData: any = {
        title: formData.get("title") as string,
        category: formData.get("category") as "Akademik" | "Kemahasiswaan" | "Seremonial",
        date: formData.get("date") as string,
    };

    if (uploadedPath) {
        updateData.imageUrl = uploadedPath;
    } else {
        const imageUrl = formData.get("imageUrl") as string;
        if (imageUrl) updateData.imageUrl = imageUrl;
    }

    await db.update(schema.gallery)
        .set(updateData)
        .where(eq(schema.gallery.id, id));

    revalidatePath("/admin/galeri");
    revalidatePath("/galeri");
    redirect("/admin/galeri");
}


export async function deleteGaleri(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.delete(schema.gallery).where(eq(schema.gallery.id, id));

    revalidatePath("/admin/galeri");
    revalidatePath("/galeri");
}
