import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

// ============================================================
// ADMIN USERS
// ============================================================
export const adminUsers = sqliteTable("admin_users", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    name: text("name").notNull(),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ============================================================
// PENGUMUMAN / BERITA
// ============================================================
export const announcements = sqliteTable("announcements", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    excerpt: text("excerpt").notNull(),
    content: text("content"),
    date: text("date").notNull(),
    category: text("category").notNull().$type<"Berita" | "Pengumuman">(),
    createdAt: integer("created_at", { mode: "timestamp" }).$defaultFn(() => new Date()),
});

// ============================================================
// DOSEN
// ============================================================
export const lecturers = sqliteTable("lecturers", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    nidn: text("nidn").notNull(),
    position: text("position").notNull(),
    specialization: text("specialization").notNull(),
    education: text("education").notNull(),
    email: text("email"),
    imageUrl: text("image_url").default("/images/dosen/placeholder.jpg"),
});

// ============================================================
// STAFF
// ============================================================
export const staff = sqliteTable("staff", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    position: text("position").notNull(),
    email: text("email"),
    imageUrl: text("image_url").default("/images/staff/placeholder.jpg"),
});

// ============================================================
// ORGANISASI MAHASISWA
// ============================================================
export const organizations = sqliteTable("organizations", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    description: text("description").notNull(),
    type: text("type").notNull(),
});

// ============================================================
// GALERI
// ============================================================
export const gallery = sqliteTable("gallery", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    category: text("category").notNull().$type<"Akademik" | "Kemahasiswaan" | "Seremonial">(),
    imageUrl: text("image_url").default("/images/gallery/placeholder.jpg"),
    date: text("date").notNull(),
});

// ============================================================
// PMB TIMELINE
// ============================================================
export const pmbTimeline = sqliteTable("pmb_timeline", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    step: integer("step").notNull(),
    title: text("title").notNull(),
    description: text("description").notNull(),
    period: text("period").notNull(),
});

// ============================================================
// BIAYA KULIAH
// ============================================================
export const tuitionFees = sqliteTable("tuition_fees", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    component: text("component").notNull(),
    amount: text("amount").notNull(),
    note: text("note").notNull(),
});

// ============================================================
// PROFIL (Key-Value)
// ============================================================
export const profile = sqliteTable("profile", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    key: text("key").notNull().unique(),
    value: text("value").notNull(),
});

// ============================================================
// SITE CONFIG (Key-Value)
// ============================================================
export const siteConfig = sqliteTable("site_config", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    key: text("key").notNull().unique(),
    value: text("value").notNull(),
});

// ============================================================
// HERO SLIDER
// ============================================================
export const heroSlides = sqliteTable("hero_slides", {
    id: integer("id").primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    subtitle: text("subtitle"),
    description: text("description"),
    buttonText: text("button_text").default("Daftar Sekarang"),
    buttonLink: text("button_link").default("/pmb"),
    imageUrl: text("image_url"),
    order: integer("order").default(0),
});
