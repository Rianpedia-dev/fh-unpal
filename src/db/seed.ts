/**
 * Database Seed Script
 * Menginisialisasi data awal dari data.ts ke database MySQL
 *
 * Jalankan: npx tsx src/db/seed.ts
 */

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";
import {
    announcements as announcementsData,
    lecturers as lecturersData,
    staffMembers,
    organizations as orgsData,
    galleryItems,
    pmbTimeline as timelineData,
    tuitionFees as feesData,
    profileData,
    siteConfig as siteConfigData,
} from "../lib/data";

async function seed() {
    const connection = await mysql.createConnection(
        process.env.DATABASE_URL || "mysql://root:@localhost:3306/fh_unpal"
    );
    const db = drizzle(connection, { schema, mode: "default" });

    console.log("🌱 Seeding database...\n");

    // 1. Announcements
    console.log("📢 Seeding announcements...");
    await db.delete(schema.announcements);
    for (const item of announcementsData) {
        await db.insert(schema.announcements)
            .values({
                title: item.title,
                excerpt: item.excerpt,
                content: item.excerpt,
                date: item.date,
                category: item.category,
            });
    }

    // 2. Lecturers
    console.log("👨‍🏫 Seeding lecturers...");
    await db.delete(schema.lecturers);
    for (const item of lecturersData) {
        await db.insert(schema.lecturers)
            .values({
                name: item.name,
                nidn: (item as any).nidn || (item as any).nip || "-",
                position: (item as any).position || "Dosen",
                specialization: item.specialization,
                education: item.education,
                imageUrl: item.imageUrl,
            });
    }

    // 3. Staff
    console.log("👤 Seeding staff...");
    await db.delete(schema.staff);
    for (const item of staffMembers) {
        await db.insert(schema.staff)
            .values({
                name: item.name,
                position: item.position,
                imageUrl: item.imageUrl,
            });
    }

    // 4. Organizations
    console.log("🏛️ Seeding organizations...");
    await db.delete(schema.organizations);
    for (const item of orgsData) {
        await db.insert(schema.organizations)
            .values({
                name: item.name,
                description: item.description,
                type: item.type,
            });
    }

    // 5. Gallery
    console.log("🖼️ Seeding gallery...");
    await db.delete(schema.gallery);
    for (const item of galleryItems) {
        await db.insert(schema.gallery)
            .values({
                title: item.title,
                category: item.category,
                imageUrl: item.imageUrl,
                date: item.date,
            });
    }

    // 6. PMB Timeline
    console.log("📋 Seeding PMB timeline...");
    await db.delete(schema.pmbTimeline);
    for (const item of timelineData) {
        await db.insert(schema.pmbTimeline)
            .values({
                step: item.step,
                title: item.title,
                description: item.description,
                period: item.period,
            });
    }

    // 7. Tuition Fees
    console.log("💰 Seeding tuition fees...");
    await db.delete(schema.tuitionFees);
    for (const item of feesData) {
        await db.insert(schema.tuitionFees)
            .values({
                component: item.component,
                amount: item.amount,
                note: item.note,
            });
    }

    // 8. Profile (key-value)
    console.log("📄 Seeding profile...");
    await db.delete(schema.profile);
    const profileEntries = [
        { key: "sejarah", value: profileData.sejarah },
        { key: "visi", value: profileData.visi },
        { key: "misi", value: JSON.stringify(profileData.misi) },
        { key: "akreditasi_grade", value: profileData.akreditasi.grade },
        { key: "akreditasi_sk", value: profileData.akreditasi.sk },
        { key: "akreditasi_validUntil", value: profileData.akreditasi.validUntil },
        { key: "akreditasi_description", value: profileData.akreditasi.description },
        { key: "struktur_dekan", value: profileData.strukturOrganisasi.dekan },
        { key: "struktur_wakil1", value: profileData.strukturOrganisasi.wakil1 },
        { key: "struktur_wakil2", value: profileData.strukturOrganisasi.wakil2 },
        { key: "struktur_kaprodi", value: profileData.strukturOrganisasi.kaprodi },
        { key: "struktur_sekretarisProdi", value: profileData.strukturOrganisasi.sekretarisProdi },
        { key: "struktur_katuTataUsaha", value: profileData.strukturOrganisasi.katuTataUsaha },
    ];
    for (const entry of profileEntries) {
        await db.insert(schema.profile).values(entry);
    }

    // 9. Site Config (key-value)
    console.log("⚙️ Seeding site config...");
    await db.delete(schema.siteConfig);
    const configEntries = [
        { key: "name", value: siteConfigData.name },
        { key: "university", value: siteConfigData.university },
        { key: "shortName", value: siteConfigData.shortName },
        { key: "description", value: siteConfigData.description },
        { key: "address", value: siteConfigData.address },
        { key: "phone", value: siteConfigData.phone },
        { key: "email", value: siteConfigData.email },
        { key: "instagram", value: siteConfigData.socialMedia.instagram },
        { key: "facebook", value: siteConfigData.socialMedia.facebook },
        { key: "youtube", value: siteConfigData.socialMedia.youtube },
    ];
    for (const entry of configEntries) {
        await db.insert(schema.siteConfig).values(entry);
    }

    // 10. Default Stat
    console.log("📊 Seeding site stats...");
    await db.delete(schema.siteStats);
    await db.insert(schema.siteStats).values({ views: 0 });

    console.log("\n✅ Seeding selesai!");
    await connection.end();
}

seed().catch(console.error);
