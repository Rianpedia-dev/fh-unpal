import {
    mysqlTable,
    int,
    varchar,
    text,
    boolean,
    timestamp,
} from "drizzle-orm/mysql-core";

// ============================================================
// 1. ANNOUNCEMENTS (Berita & Pengumuman)
// ============================================================
export const announcements = mysqlTable("announcements", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 500 }).notNull(),
    excerpt: text("excerpt"),
    content: text("content"),
    date: varchar("date", { length: 50 }),
    category: varchar("category", { length: 100 }).default("Berita"),
    imageUrl: varchar("image_url", { length: 500 }),
    createdAt: timestamp("created_at").defaultNow(),
});

// ============================================================
// 2. LECTURERS (Dosen)
// ============================================================
export const lecturers = mysqlTable("lecturers", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    nidn: varchar("nidn", { length: 50 }).notNull(),
    position: varchar("position", { length: 255 }).notNull(),
    specialization: varchar("specialization", { length: 500 }).notNull(),
    education: varchar("education", { length: 500 }).notNull(),
    email: varchar("email", { length: 255 }),
    imageUrl: varchar("image_url", { length: 500 }),
});

// ============================================================
// 3. STAFF (Tenaga Kependidikan)
// ============================================================
export const staff = mysqlTable("staff", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    position: varchar("position", { length: 255 }).notNull(),
    imageUrl: varchar("image_url", { length: 500 }),
});

// ============================================================
// 4. ORGANIZATIONS (Organisasi Mahasiswa)
// ============================================================
export const organizations = mysqlTable("organizations", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description"),
    imageUrl: varchar("image_url", { length: 500 }),
});

// ============================================================
// 5. GALLERY (Galeri Media)
// ============================================================
export const gallery = mysqlTable("gallery", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 500 }).notNull(),
    description: text("description"),
    filePath: varchar("file_path", { length: 500 }).notNull(),
    thumbnailPath: varchar("thumbnail_path", { length: 500 }),
    mediaType: varchar("media_type", { length: 20 }).notNull().default("image"),
    categoryName: varchar("category_name", { length: 100 }),
    createdAt: timestamp("created_at").defaultNow(),
});

// ============================================================
// 6. HERO SLIDES (Slider Homepage)
// ============================================================
export const heroSlides = mysqlTable("hero_slides", {
    id: int("id").autoincrement().primaryKey(),
    imageUrl: varchar("image_url", { length: 500 }).notNull(),
    title: varchar("title", { length: 500 }),
    subtitle: text("subtitle"),
    buttonText: varchar("button_text", { length: 100 }),
    buttonLink: varchar("button_link", { length: 500 }),
    order: int("display_order").notNull().default(0),
    isActive: boolean("is_active").notNull().default(true),
});

// ============================================================
// 7. PMB TIMELINE
// ============================================================
export const pmbTimeline = mysqlTable("pmb_timeline", {
    id: int("id").autoincrement().primaryKey(),
    step: int("step").notNull(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description"),
    date: varchar("date", { length: 100 }),
});

// ============================================================
// 8. TUITION FEES (Biaya Kuliah Umum)
// ============================================================
export const tuitionFees = mysqlTable("tuition_fees", {
    id: int("id").autoincrement().primaryKey(),
    category: varchar("category", { length: 100 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    amount: varchar("amount", { length: 100 }).notNull(),
    description: text("description"),
});

// ============================================================
// 9. PROFILE (Profil Fakultas — Key-Value)
// ============================================================
export const profile = mysqlTable("profile", {
    id: int("id").autoincrement().primaryKey(),
    key: varchar("profile_key", { length: 191 }).notNull().unique(),
    value: text("profile_value").notNull(),
});

// ============================================================
// 10. SITE CONFIG (Konfigurasi Situs — Key-Value)
// ============================================================
export const siteConfig = mysqlTable("site_config", {
    id: int("id").autoincrement().primaryKey(),
    key: varchar("config_key", { length: 191 }).notNull().unique(),
    value: text("config_value").notNull(),
});

// ============================================================
// 11. SITE STATS (Statistik Pengunjung)
// ============================================================
export const siteStats = mysqlTable("site_stats", {
    id: int("id").autoincrement().primaryKey(),
    views: int("views").notNull().default(0),
});

// ============================================================
// 12. TESTIMONIALS (Testimoni Alumni)
// ============================================================
export const testimonials = mysqlTable("testimonials", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    role: varchar("role", { length: 255 }).notNull(),
    content: text("content").notNull(),
    image: varchar("image", { length: 500 }),
    rating: int("rating").notNull().default(5),
    createdAt: timestamp("created_at").defaultNow(),
});

// ============================================================
// 13. PARTNERS (Mitra / Kerjasama)
// ============================================================
export const partners = mysqlTable("partners", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    logo: varchar("logo", { length: 500 }),
    url: varchar("url", { length: 500 }),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 14. CONTACT INFO (Info Kontak — Key-Value)
// ============================================================
export const contactInfo = mysqlTable("contact_info", {
    id: int("id").autoincrement().primaryKey(),
    key: varchar("contact_key", { length: 191 }).notNull().unique(),
    value: text("contact_value").notNull(),
});

// ============================================================
// 15. SOCIAL MEDIA (Media Sosial)
// ============================================================
export const socialMedia = mysqlTable("social_media", {
    id: int("id").autoincrement().primaryKey(),
    platform: varchar("platform", { length: 100 }).notNull(),
    url: varchar("url", { length: 500 }).notNull(),
    username: varchar("username", { length: 255 }),
    icon: varchar("icon", { length: 50 }),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 16. CAMPUS ACCESS (Aksesibilitas Kampus)
// ============================================================
export const campusAccess = mysqlTable("campus_access", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: text("description").notNull(),
    icon: varchar("icon", { length: 50 }),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 17. PMB TRACKS (Jalur Pendaftaran)
// ============================================================
export const pmbTracks = mysqlTable("pmb_tracks", {
    id: int("id").autoincrement().primaryKey(),
    trackId: varchar("track_id", { length: 50 }).notNull().unique(),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description"),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 18. PMB CLASSES (Jenis Kelas)
// ============================================================
export const pmbClasses = mysqlTable("pmb_classes", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    type: varchar("type", { length: 100 }).notNull(),
    description: text("description"),
    schedule: varchar("schedule", { length: 255 }),
    duration: varchar("duration", { length: 100 }),
    icon: varchar("icon", { length: 50 }).default("sun"),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 19. PMB FEE CATEGORIES (Kategori Biaya PMB)
// ============================================================
export const pmbFeeCategories = mysqlTable("pmb_fee_categories", {
    id: int("id").autoincrement().primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    studentType: varchar("student_type", { length: 50 }).notNull(),
    total: varchar("total", { length: 100 }),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 20. PMB FEE ITEMS (Rincian Item Biaya PMB)
// ============================================================
export const pmbFeeItems = mysqlTable("pmb_fee_items", {
    id: int("id").autoincrement().primaryKey(),
    categoryId: int("category_id").notNull(),
    label: varchar("label", { length: 255 }).notNull(),
    amount: varchar("amount", { length: 100 }).notNull(),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 21. PMB REQUIREMENTS (Syarat Pendaftaran)
// ============================================================
export const pmbRequirements = mysqlTable("pmb_requirements", {
    id: int("id").autoincrement().primaryKey(),
    studentType: varchar("student_type", { length: 50 }).notNull(),
    requirement: text("requirement").notNull(),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 22. PMB TEAM (Tim PMB)
// ============================================================
export const pmbTeam = mysqlTable("pmb_team", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    role: varchar("role", { length: 255 }).notNull(),
    phone: varchar("phone", { length: 50 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    image: varchar("image", { length: 500 }),
    order: int("display_order").notNull().default(0),
});

// ============================================================
// 23. ADMIN USERS (Pengguna Panel Admin)
// ============================================================
export const adminUsers = mysqlTable("admin_users", {
    id: int("id").autoincrement().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 191 }).notNull().unique(),
    password: varchar("password", { length: 255 }).notNull(), // Hashed
    role: varchar("role", { length: 50 }).notNull().default("staff"), // superadmin, staff
    permissions: text("permissions"), // JSON string array of allowed menu slugs
    isActive: boolean("is_active").notNull().default(true),
    createdAt: timestamp("created_at").defaultNow(),
});
