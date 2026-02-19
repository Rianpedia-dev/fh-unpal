/**
 * Database Seed Script
 * Menginisialisasi data awal dari data.ts ke database SQLite
 *
 * Jalankan: npx tsx src/db/seed.ts
 */

import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
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

const sqlite = new Database("sqlite.db");
sqlite.pragma("journal_mode = WAL");
const db = drizzle(sqlite, { schema });

async function seed() {
    console.log("🌱 Seeding database...\n");

    // 1. Announcements
    console.log("📢 Seeding announcements...");
    for (const item of announcementsData) {
        db.insert(schema.announcements)
            .values({
                title: item.title,
                excerpt: item.excerpt,
                content: item.excerpt,
                date: item.date,
                category: item.category,
            })
            .run();
    }

    // 2. Lecturers
    console.log("👨‍🏫 Seeding lecturers...");
    for (const item of lecturersData) {
        db.insert(schema.lecturers)
            .values({
                name: item.name,
                nidn: (item as any).nidn || (item as any).nip || "-",
                position: (item as any).position || "Dosen",
                specialization: item.specialization,
                education: item.education,
                imageUrl: item.imageUrl,
            })
            .run();
    }

    // 3. Staff
    console.log("👤 Seeding staff...");
    for (const item of staffMembers) {
        db.insert(schema.staff)
            .values({
                name: item.name,
                position: item.position,
                imageUrl: item.imageUrl,
            })
            .run();
    }

    // 4. Organizations
    console.log("🏛️ Seeding organizations...");
    for (const item of orgsData) {
        db.insert(schema.organizations)
            .values({
                name: item.name,
                description: item.description,
                type: item.type,
            })
            .run();
    }

    // 5. Gallery
    console.log("🖼️ Seeding gallery...");
    for (const item of galleryItems) {
        db.insert(schema.gallery)
            .values({
                title: item.title,
                category: item.category,
                imageUrl: item.imageUrl,
                date: item.date,
            })
            .run();
    }

    // 6. PMB Timeline
    console.log("📋 Seeding PMB timeline...");
    for (const item of timelineData) {
        db.insert(schema.pmbTimeline)
            .values({
                step: item.step,
                title: item.title,
                description: item.description,
                period: item.period,
            })
            .run();
    }

    // 7. Tuition Fees
    console.log("💰 Seeding tuition fees...");
    for (const item of feesData) {
        db.insert(schema.tuitionFees)
            .values({
                component: item.component,
                amount: item.amount,
                note: item.note,
            })
            .run();
    }

    // 8. Profile (key-value)
    console.log("📄 Seeding profile...");
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
        db.insert(schema.profile).values(entry).run();
    }

    // 9. Site Config (key-value)
    console.log("⚙️ Seeding site config...");
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
        db.insert(schema.siteConfig).values(entry).run();
    }

    console.log("\n✅ Seeding selesai!");
    sqlite.close();
}

seed().catch(console.error);
