"use server";

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updateProfil(formData: FormData) {
    const entries = [
        { key: "sejarah", value: formData.get("sejarah") as string },
        { key: "visi", value: formData.get("visi") as string },
        { key: "misi", value: JSON.stringify((formData.get("misi") as string).split("\n").filter(Boolean)) },
        { key: "akreditasi_grade", value: formData.get("akreditasi_grade") as string },
        { key: "akreditasi_sk", value: formData.get("akreditasi_sk") as string },
        { key: "akreditasi_validUntil", value: formData.get("akreditasi_validUntil") as string },
        { key: "akreditasi_description", value: formData.get("akreditasi_description") as string },
        { key: "struktur_dekan", value: formData.get("struktur_dekan") as string },
        { key: "struktur_wakil1", value: formData.get("struktur_wakil1") as string },
        { key: "struktur_wakil2", value: formData.get("struktur_wakil2") as string },
        { key: "struktur_kaprodi", value: formData.get("struktur_kaprodi") as string },
        { key: "struktur_sekretarisProdi", value: formData.get("struktur_sekretarisProdi") as string },
        { key: "struktur_katuTataUsaha", value: formData.get("struktur_katuTataUsaha") as string },
    ];

    for (const entry of entries) {
        if (entry.value) {
            const existing = db.select().from(schema.profile).where(eq(schema.profile.key, entry.key)).get();
            if (existing) {
                db.update(schema.profile).set({ value: entry.value }).where(eq(schema.profile.key, entry.key)).run();
            } else {
                db.insert(schema.profile).values(entry).run();
            }
        }
    }

    revalidatePath("/admin/profil");
    revalidatePath("/profil");
    revalidatePath("/");
}

export async function updateSiteConfig(formData: FormData) {
    const entries = [
        { key: "name", value: formData.get("name") as string },
        { key: "university", value: formData.get("university") as string },
        { key: "shortName", value: formData.get("shortName") as string },
        { key: "description", value: formData.get("description") as string },
        { key: "address", value: formData.get("address") as string },
        { key: "phone", value: formData.get("phone") as string },
        { key: "email", value: formData.get("email") as string },
        { key: "instagram", value: formData.get("instagram") as string },
        { key: "facebook", value: formData.get("facebook") as string },
        { key: "youtube", value: formData.get("youtube") as string },
    ];

    for (const entry of entries) {
        if (entry.value) {
            const existing = db.select().from(schema.siteConfig).where(eq(schema.siteConfig.key, entry.key)).get();
            if (existing) {
                db.update(schema.siteConfig).set({ value: entry.value }).where(eq(schema.siteConfig.key, entry.key)).run();
            } else {
                db.insert(schema.siteConfig).values(entry).run();
            }
        }
    }

    revalidatePath("/admin/pengaturan");
    revalidatePath("/");
}
