"use server";

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPengumuman(formData: FormData) {
    await db.insert(schema.announcements)
        .values({
            title: formData.get("title") as string,
            excerpt: formData.get("excerpt") as string,
            content: formData.get("content") as string,
            date: formData.get("date") as string,
            category: formData.get("category") as "Berita" | "Pengumuman",
        });

    revalidatePath("/admin/pengumuman");
    revalidatePath("/");
    redirect("/admin/pengumuman");
}

export async function updatePengumuman(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.update(schema.announcements)
        .set({
            title: formData.get("title") as string,
            excerpt: formData.get("excerpt") as string,
            content: formData.get("content") as string,
            date: formData.get("date") as string,
            category: formData.get("category") as "Berita" | "Pengumuman",
        })
        .where(eq(schema.announcements.id, id));

    revalidatePath("/admin/pengumuman");
    revalidatePath("/");
    redirect("/admin/pengumuman");
}

export async function deletePengumuman(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.delete(schema.announcements).where(eq(schema.announcements.id, id));

    revalidatePath("/admin/pengumuman");
    revalidatePath("/");
}
