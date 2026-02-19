import { mysqlTable, varchar, int, text, timestamp } from "drizzle-orm/mysql-core";

// ============================================================
// ADMIN USERS
// ============================================================
export const adminUsers = mysqlTable("admin_users", {
    id: int("id").autoincrement().primaryKey(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    createdAt: timestamp("created_at").$defaultFn(() => new Date()),
});

// ============================================================
// PENGUMUMAN / BERITA
// ============================================================
export const announcements = mysqlTable("announcements", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    excerpt: text("excerpt").notNull(),
    content: text("content"),
    date: varchar("date", { length: 50 }).notNull(),
    category: varchar("category", { length: 50 }).notNull().$type<"Berita" | "Pengumuman">(),
    createdAt: timestamp("created_at").$defaultFn(() => new Date()),
});

// ============================================================
// DOSEN
// ============================================================
export const lecturers = mysqlTable("lecturers", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    nidn: varchar("nidn", { length: 100 }).notNull(),
    position: varchar("position", { length: 255 }).notNull(),
    specialization: varchar("specialization", { length: 255 }).notNull(),
    education: varchar("education", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }),
    imageUrl: varchar("image_url", { length: 500 }).default("/images/dosen/placeholder.jpg"),
});

// ============================================================
// STAFF
// ============================================================
export const staff = mysqlTable("staff", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    position: varchar("position", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }),
    imageUrl: varchar("image_url", { length: 500 }).default("/images/staff/placeholder.jpg"),
});

// ============================================================
// ORGANISASI MAHASISWA
// ============================================================
export const organizations = mysqlTable("organizations", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description").notNull(),
    type: varchar("type", { length: 100 }).notNull(),
});

// ============================================================
// GALERI
// ============================================================
export const gallery = mysqlTable("gallery", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    category: varchar("category", { length: 50 }).notNull().$type<"Akademik" | "Kemahasiswaan" | "Seremonial">(),
    imageUrl: varchar("image_url", { length: 500 }).default("/images/gallery/placeholder.jpg"),
    date: varchar("date", { length: 50 }).notNull(),
});

// ============================================================
// PMB TIMELINE
// ============================================================
export const pmbTimeline = mysqlTable("pmb_timeline", {
    id: int("id").autoincrement().primaryKey(),
    step: int("step").notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description").notNull(),
    period: varchar("period", { length: 255 }).notNull(),
});

// ============================================================
// BIAYA KULIAH
// ============================================================
export const tuitionFees = mysqlTable("tuition_fees", {
    id: int("id").autoincrement().primaryKey(),
    component: varchar("component", { length: 255 }).notNull(),
    amount: varchar("amount", { length: 100 }).notNull(),
    note: varchar("note", { length: 255 }).notNull(),
});

// ============================================================
// PROFIL (Key-Value)
// ============================================================
export const profile = mysqlTable("profile", {
    id: int("id").autoincrement().primaryKey(),
    key: varchar("key", { length: 255 }).notNull().unique(),
    value: text("value").notNull(),
});

// ============================================================
// SITE CONFIG (Key-Value)
// ============================================================
export const siteConfig = mysqlTable("site_config", {
    id: int("id").autoincrement().primaryKey(),
    key: varchar("key", { length: 255 }).notNull().unique(),
    value: text("value").notNull(),
});

// ============================================================
// HERO SLIDER
// ============================================================
export const heroSlides = mysqlTable("hero_slides", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    subtitle: varchar("subtitle", { length: 255 }),
    description: text("description"),
    buttonText: varchar("button_text", { length: 100 }).default("Daftar Sekarang"),
    buttonLink: varchar("button_link", { length: 255 }).default("/pmb"),
    imageUrl: varchar("image_url", { length: 500 }),
    order: int("order").default(0),
});

// ============================================================
// SITE STATS (Misalnya: Jumlah Pengunjung)
// ============================================================
export const siteStats = mysqlTable("site_stats", {
    id: int("id").autoincrement().primaryKey(),
    views: int("views").default(0).notNull(),
});
