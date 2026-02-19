"use server";

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { uploadImage } from "@/lib/upload";

export async function createDosen(formData: FormData) {
    const file = formData.get("image") as File;
    const uploadedPath = await uploadImage(file, "dosen");

    await db.insert(schema.lecturers)
        .values({
            name: formData.get("name") as string,
            nidn: formData.get("nidn") as string,
            position: formData.get("position") as string,
            specialization: formData.get("specialization") as string,
            education: formData.get("education") as string,
            email: formData.get("email") as string,
            imageUrl: uploadedPath || (formData.get("imageUrl") as string) || "/images/dosen/placeholder.jpg",
        });

    revalidatePath("/admin/dosen");
    revalidatePath("/civitas");
    redirect("/admin/dosen");
}

export async function updateDosen(formData: FormData) {
    const id = Number(formData.get("id"));
    const file = formData.get("image") as File;
    const uploadedPath = await uploadImage(file, "dosen");

    const updateData: any = {
        name: formData.get("name") as string,
        nidn: formData.get("nidn") as string,
        position: formData.get("position") as string,
        specialization: formData.get("specialization") as string,
        education: formData.get("education") as string,
        email: formData.get("email") as string,
    };

    if (uploadedPath) {
        updateData.imageUrl = uploadedPath;
    } else {
        const imageUrl = formData.get("imageUrl") as string;
        if (imageUrl) updateData.imageUrl = imageUrl;
    }

    await db.update(schema.lecturers)
        .set(updateData)
        .where(eq(schema.lecturers.id, id));

    revalidatePath("/admin/dosen");
    revalidatePath("/civitas");
    redirect("/admin/dosen");
}


export async function deleteDosen(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.delete(schema.lecturers).where(eq(schema.lecturers.id, id));

    revalidatePath("/admin/dosen");
    revalidatePath("/civitas");
}
