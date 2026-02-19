import { db } from "./index";
import * as schema from "./schema";
import { eq, asc, sql } from "drizzle-orm";

// ============================================================
// PENGUMUMAN
// ============================================================
export async function getAnnouncements() {
    try {
        return await db.select().from(schema.announcements).orderBy(schema.announcements.id);
    } catch (e) {
        console.error("Failed to get announcements:", e);
        return [];
    }
}

export async function getAnnouncementById(id: number) {
    try {
        const rows = await db.select().from(schema.announcements).where(eq(schema.announcements.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get announcement ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// DOSEN
// ============================================================
export async function getLecturers() {
    try {
        return await db.select().from(schema.lecturers).orderBy(schema.lecturers.id);
    } catch (e) {
        console.error("Failed to get lecturers:", e);
        return [];
    }
}

export async function getLecturerById(id: number) {
    try {
        const rows = await db.select().from(schema.lecturers).where(eq(schema.lecturers.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get lecturer ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// STAFF
// ============================================================
export async function getStaff() {
    try {
        return await db.select().from(schema.staff).orderBy(schema.staff.id);
    } catch (e) {
        console.error("Failed to get staff:", e);
        return [];
    }
}

export async function getStaffById(id: number) {
    try {
        const rows = await db.select().from(schema.staff).where(eq(schema.staff.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get staff ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// ORGANISASI
// ============================================================
export async function getOrganizations() {
    try {
        return await db.select().from(schema.organizations).orderBy(schema.organizations.id);
    } catch (e) {
        console.error("Failed to get organizations:", e);
        return [];
    }
}

export async function getOrganizationById(id: number) {
    try {
        const rows = await db.select().from(schema.organizations).where(eq(schema.organizations.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get organization ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// GALERI
// ============================================================
export async function getGallery() {
    try {
        return await db.select().from(schema.gallery).orderBy(schema.gallery.id);
    } catch (e) {
        console.error("Failed to get gallery:", e);
        return [];
    }
}

export async function getGalleryById(id: number) {
    try {
        const rows = await db.select().from(schema.gallery).where(eq(schema.gallery.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get gallery ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// PMB TIMELINE
// ============================================================
export async function getPmbTimeline() {
    try {
        return await db.select().from(schema.pmbTimeline).orderBy(asc(schema.pmbTimeline.step));
    } catch (e) {
        console.error("Failed to get PMB timeline:", e);
        return [];
    }
}

export async function getPmbTimelineById(id: number) {
    try {
        const rows = await db.select().from(schema.pmbTimeline).where(eq(schema.pmbTimeline.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get PMB timeline ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// BIAYA KULIAH
// ============================================================
export async function getTuitionFees() {
    try {
        return await db.select().from(schema.tuitionFees).orderBy(schema.tuitionFees.id);
    } catch (e) {
        console.error("Failed to get tuition fees:", e);
        return [];
    }
}

export async function getTuitionFeeById(id: number) {
    try {
        const rows = await db.select().from(schema.tuitionFees).where(eq(schema.tuitionFees.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get tuition fee ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// PROFIL (Key-Value)
// ============================================================
export async function getProfileValue(key: string): Promise<string> {
    try {
        const rows = await db.select().from(schema.profile).where(eq(schema.profile.key, key));
        return rows[0]?.value ?? "";
    } catch (e) {
        console.error(`Failed to get profile value for ${key}:`, e);
        return "";
    }
}

export async function getAllProfile() {
    try {
        return await db.select().from(schema.profile);
    } catch (e) {
        console.error("Failed to get all profile:", e);
        return [];
    }
}

export async function getFullProfile() {
    const rows = await getAllProfile();
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
export async function getSiteConfigValue(key: string): Promise<string> {
    try {
        const rows = await db.select().from(schema.siteConfig).where(eq(schema.siteConfig.key, key));
        return rows[0]?.value ?? "";
    } catch (e) {
        console.error(`Failed to get site config value for ${key}:`, e);
        return "";
    }
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

export async function getFullSiteConfig(): Promise<SiteConfig> {
    const map: Record<string, string> = {};
    try {
        const rows = await db.select().from(schema.siteConfig);
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
export async function getDashboardCounts() {
    try {
        const [announcementsList, lecturersList, staffList, organizationsList, galleryList] = await Promise.all([
            db.select().from(schema.announcements),
            db.select().from(schema.lecturers),
            db.select().from(schema.staff),
            db.select().from(schema.organizations),
            db.select().from(schema.gallery)
        ]);

        return {
            announcements: announcementsList.length,
            lecturers: lecturersList.length,
            staff: staffList.length,
            organizations: organizationsList.length,
            gallery: galleryList.length,
        };
    } catch (e) {
        console.error("Failed to get dashboard counts:", e);
        return {
            announcements: 0,
            lecturers: 0,
            staff: 0,
            organizations: 0,
            gallery: 0,
        };
    }
}

// ============================================================
// HERO SLIDER
// ============================================================
export async function getHeroSlides() {
    try {
        return await db.select().from(schema.heroSlides).orderBy(asc(schema.heroSlides.order));
    } catch (e) {
        console.error("Failed to get hero slides:", e);
        return [];
    }
}

export async function getHeroSlideById(id: number) {
    try {
        const rows = await db.select().from(schema.heroSlides).where(eq(schema.heroSlides.id, id));
        return rows[0] ?? undefined;
    } catch (e) {
        console.error(`Failed to get hero slide ${id}:`, e);
        return undefined;
    }
}

// ============================================================
// SITE STATS / VISITOR COUNTER
// ============================================================
export async function incrementViews() {
    try {
        return await db.execute(
            sql`UPDATE site_stats SET views = views + 1 WHERE id = 1`
        );
    } catch (e) {
        console.error("Failed to increment views:", e);
    }
}

export async function getViews(): Promise<number> {
    try {
        const rows = await db.select().from(schema.siteStats).where(eq(schema.siteStats.id, 1));
        return rows[0]?.views ?? 0;
    } catch (e) {
        console.error("Failed to get views:", e);
        return 0;
    }
}
