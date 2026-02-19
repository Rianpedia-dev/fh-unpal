"use server";

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { uploadImage } from "@/lib/upload";

export async function createHeroSlide(formData: FormData) {
    const file = formData.get("image") as File;
    const uploadedPath = await uploadImage(file, "hero");

    db.insert(schema.heroSlides)
        .values({
            title: formData.get("title") as string,
            subtitle: formData.get("subtitle") as string,
            description: formData.get("description") as string,
            buttonText: formData.get("buttonText") as string || "Daftar Sekarang",
            buttonLink: formData.get("buttonLink") as string || "/pmb",
            imageUrl: uploadedPath || "/images/hero-placeholder.jpg",
            order: Number(formData.get("order")) || 0,
        })
        .run();

    revalidatePath("/");
    revalidatePath("/admin/hero");
    redirect("/admin/hero");
}

export async function updateHeroSlide(formData: FormData) {
    const id = Number(formData.get("id"));
    const file = formData.get("image") as File;
    const uploadedPath = await uploadImage(file, "hero");

    const updateData: any = {
        title: formData.get("title") as string,
        subtitle: formData.get("subtitle") as string,
        description: formData.get("description") as string,
        buttonText: formData.get("buttonText") as string,
        buttonLink: formData.get("buttonLink") as string,
        order: Number(formData.get("order")) || 0,
    };

    if (uploadedPath) {
        updateData.imageUrl = uploadedPath;
    }

    db.update(schema.heroSlides)
        .set(updateData)
        .where(eq(schema.heroSlides.id, id))
        .run();

    revalidatePath("/");
    revalidatePath("/admin/hero");
    redirect("/admin/hero");
}

export async function deleteHeroSlide(formData: FormData) {
    const id = Number(formData.get("id"));
    db.delete(schema.heroSlides).where(eq(schema.heroSlides.id, id)).run();

    revalidatePath("/");
    revalidatePath("/admin/hero");
}
