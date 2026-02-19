import { db } from "./index";
import * as schema from "./schema";
import { eq, asc, sql } from "drizzle-orm";

// ============================================================
// PENGUMUMAN
// ============================================================
export function getAnnouncements() {
    return db.select().from(schema.announcements).orderBy(schema.announcements.id).all();
}

export function getAnnouncementById(id: number) {
    return db.select().from(schema.announcements).where(eq(schema.announcements.id, id)).get();
}

// ============================================================
// DOSEN
// ============================================================
export function getLecturers() {
    return db.select().from(schema.lecturers).orderBy(schema.lecturers.id).all();
}

export function getLecturerById(id: number) {
    return db.select().from(schema.lecturers).where(eq(schema.lecturers.id, id)).get();
}

// ============================================================
// STAFF
// ============================================================
export function getStaff() {
    return db.select().from(schema.staff).orderBy(schema.staff.id).all();
}

export function getStaffById(id: number) {
    return db.select().from(schema.staff).where(eq(schema.staff.id, id)).get();
}

// ============================================================
// ORGANISASI
// ============================================================
export function getOrganizations() {
    return db.select().from(schema.organizations).orderBy(schema.organizations.id).all();
}

export function getOrganizationById(id: number) {
    return db.select().from(schema.organizations).where(eq(schema.organizations.id, id)).get();
}

// ============================================================
// GALERI
// ============================================================
export function getGallery() {
    return db.select().from(schema.gallery).orderBy(schema.gallery.id).all();
}

export function getGalleryById(id: number) {
    return db.select().from(schema.gallery).where(eq(schema.gallery.id, id)).get();
}

// ============================================================
// PMB TIMELINE
// ============================================================
export function getPmbTimeline() {
    return db.select().from(schema.pmbTimeline).orderBy(asc(schema.pmbTimeline.step)).all();
}

export function getPmbTimelineById(id: number) {
    return db.select().from(schema.pmbTimeline).where(eq(schema.pmbTimeline.id, id)).get();
}

// ============================================================
// BIAYA KULIAH
// ============================================================
export function getTuitionFees() {
    return db.select().from(schema.tuitionFees).orderBy(schema.tuitionFees.id).all();
}

export function getTuitionFeeById(id: number) {
    return db.select().from(schema.tuitionFees).where(eq(schema.tuitionFees.id, id)).get();
}

// ============================================================
// PROFIL (Key-Value)
// ============================================================
export function getProfileValue(key: string): string {
    const row = db.select().from(schema.profile).where(eq(schema.profile.key, key)).get();
    return row?.value ?? "";
}

export function getAllProfile() {
    try {
        return db.select().from(schema.profile).all();
    } catch (e) {
        console.error("Failed to get all profile:", e);
        return [];
    }
}

export function getFullProfile() {
    const rows = getAllProfile();
    const map: Record<string, string> = {};
    for (const row of rows) {
        map[row.key] = row.value;
    }

    return {
        sejarah: map["sejarah"] ?? "",
        visi: map["visi"] ?? "",
        misi: (() => {
            try {
                return JSON.parse(map["misi"] ?? "[]") as string[];
            } catch (e) {
                console.error("Failed to parse misi:", e);
                return [];
            }
        })(),
        akreditasi: {
            grade: map["akreditasi_grade"] ?? "",
            sk: map["akreditasi_sk"] ?? "",
            validUntil: map["akreditasi_validUntil"] ?? "",
            description: map["akreditasi_description"] ?? "",
        },
        strukturOrganisasi: {
            dekan: map["struktur_dekan"] ?? "",
            wakil1: map["struktur_wakil1"] ?? "",
            wakil2: map["struktur_wakil2"] ?? "",
            kaprodi: map["struktur_kaprodi"] ?? "",
            sekretarisProdi: map["struktur_sekretarisProdi"] ?? "",
            katuTataUsaha: map["struktur_katuTataUsaha"] ?? "",
        },
    };
}

// ============================================================
// SITE CONFIG (Key-Value)
// ============================================================
export function getSiteConfigValue(key: string): string {
    const row = db.select().from(schema.siteConfig).where(eq(schema.siteConfig.key, key)).get();
    return row?.value ?? "";
}

export interface SiteConfig {
    name: string;
    university: string;
    shortName: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    socialMedia: {
        instagram: string;
        facebook: string;
        youtube: string;
    };
}

export function getFullSiteConfig(): SiteConfig {
    const map: Record<string, string> = {};
    try {
        const rows = db.select().from(schema.siteConfig).all();
        for (const row of rows) {
            map[row.key] = row.value;
        }
    } catch (e) {
        console.error("Failed to get full site config:", e);
    }

    return {
        name: map["name"] ?? "Fakultas Hukum",
        university: map["university"] ?? "Universitas Palembang",
        shortName: map["shortName"] ?? "FH UNPAL",
        description: map["description"] ?? "",
        address: map["address"] ?? "",
        phone: map["phone"] ?? "",
        email: map["email"] ?? "",
        socialMedia: {
            instagram: map["instagram"] ?? "",
            facebook: map["facebook"] ?? "",
            youtube: map["youtube"] ?? "",
        },
    };
}

// ============================================================
// COUNTS (untuk dashboard admin)
// ============================================================
export function getDashboardCounts() {
    const announcementsCount = db.select().from(schema.announcements).all().length;
    const lecturersCount = db.select().from(schema.lecturers).all().length;
    const staffCount = db.select().from(schema.staff).all().length;
    const organizationsCount = db.select().from(schema.organizations).all().length;
    const galleryCount = db.select().from(schema.gallery).all().length;

    return {
        announcements: announcementsCount,
        lecturers: lecturersCount,
        staff: staffCount,
        organizations: organizationsCount,
        gallery: galleryCount,
    };
}

// ============================================================
// HERO SLIDER
// ============================================================
export function getHeroSlides() {
    try {
        return db.select().from(schema.heroSlides).orderBy(asc(schema.heroSlides.order)).all();
    } catch (e) {
        console.error("Failed to get hero slides:", e);
        return [];
    }
}

export function getHeroSlideById(id: number) {
    return db.select().from(schema.heroSlides).where(eq(schema.heroSlides.id, id)).get();
}

// ============================================================
// SITE STATS / VISITOR COUNTER
// ============================================================
export function incrementViews() {
    try {
        return db.run(
            sql`UPDATE site_stats SET views = views + 1 WHERE id = 1`
        );
    } catch (e) {
        console.error("Failed to increment views:", e);
    }
}

export function getViews(): number {
    try {
        const row = db.select().from(schema.siteStats).where(eq(schema.siteStats.id, 1)).get();
        return row?.views ?? 0;
    } catch (e) {
        console.error("Failed to get views:", e);
        return 0;
    }
}

