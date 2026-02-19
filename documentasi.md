
Berikut adalah **Product Requirements Document (PRD)** dan dokumentasi teknis lengkap untuk proyek website Fakultas Hukum Anda.

---

# 📄 Product Requirements Document (PRD) - Website Fakultas Hukum

## 1. Ringkasan Proyek

Membangun platform informasi digital resmi untuk Fakultas Hukum yang berfungsi sebagai pusat informasi bagi mahasiswa, calon mahasiswa, dan masyarakat umum. Website ini harus mencerminkan kesan profesional, formal, dan kredibel.

## 2. Target Pengguna

* **Calon Mahasiswa:** Mencari informasi pendaftaran (PMB).
* **Mahasiswa Aktif:** Mencari info akademik dan profil dosen.
* **Dosen/Staf:** Mengelola konten melalui panel admin.
* **Alumni & Publik:** Melihat berita dan galeri kegiatan.

---

## 3. Struktur Menu & Fitur Utama

| Menu | Deskripsi Fitur |
| --- | --- |
| **Beranda** | Hero section, pengumuman terbaru, sambutan Dekan, dan link cepat (Quick Links). |
| **Profil** | Sejarah, Visi & Misi, Struktur Organisasi, dan Akreditasi. |
| **Civitas Akademika** | Daftar Dosen (dengan detail bio), Staff, dan Organisasi Mahasiswa. |
| **Galeri** | Dokumentasi kegiatan fakultas dalam bentuk foto dan video. |
| **Info PMB** | Alur pendaftaran, biaya kuliah, jadwal seleksi, dan tombol daftar. |
| **Admin Panel** | CMS (Content Management System) untuk update konten tanpa coding. |

---

## 4. Arsitektur Teknis & Stack

* **Framework:** Next.js 14/15 (App Router).
* **Styling:** Tailwind CSS & Shadcn UI (untuk komponen yang konsisten).
* **Database:** SQLite (menggunakan file `.db` lokal, sangat cepat untuk read-heavy site).
* **ORM:** Drizzle ORM (Type-safe SQL).
* **Auth:** NextAuth.js atau Clerk (opsional untuk akses admin).

---

## 5. Skema Database (Drizzle ORM)

Berikut adalah rancangan tabel utama yang perlu Anda buat di `schema.ts`:

```typescript
// Contoh struktur skema Drizzle
export const lecturers = sqliteTable("lecturers", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  nip: text("nip").unique(),
  specialization: text("specialization"),
  imageUrl: text("image_url"),
});

export const news = sqliteTable("news", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  category: text("category"), // 'Berita' atau 'Pengumuman'
  createdAt: integer("created_at", { mode: "timestamp" }),
});

export const gallery = sqliteTable("gallery", {
  id: integer("id").primaryKey(),
  title: text("title"),
  imageUrl: text("image_url").notNull(),
  type: text("type"), // 'Foto' atau 'Video'
});

```

---

## 6. Rencana Implementasi (Roadmap)

### Fase 1: Setup Dasar (Minggu 1)

* Inisialisasi Next.js dengan Tailwind.
* Konfigurasi Drizzle ORM dengan SQLite.
* Setup Shadcn UI (Install komponen Button, Card, Navbar, Dialog).

### Fase 2: Pengembangan UI (Minggu 2)

* Slicing desain Beranda dan Profil.
* Membuat komponen *Reusable* (Header, Footer, Breadcrumbs).
* Halaman Info PMB dengan konten statis.

### Fase 3: Integrasi Data & Civitas (Minggu 3)

* Implementasi halaman Civitas Akademika (Fetching data dosen dari SQLite).
* Membuat fitur filter/search sederhana untuk mencari dosen.
* Halaman Galeri dengan *lightbox* image.

### Fase 4: Admin & CMS (Minggu 4)

* Membuat *Protected Route* untuk Admin.
* Form CRUD (Create, Read, Update, Delete) untuk Berita, Dosen, dan Galeri menggunakan **Server Actions**.

---

## 7. Kebutuhan Non-Fungsional

1. **SEO:** Penggunaan Metadata API di Next.js untuk setiap halaman.
2. **Responsif:** Harus tampil sempurna di smartphone (karena calon mahasiswa banyak akses lewat HP).
3. **Aksesibilitas:** Kontras warna yang baik (mengingat audiens akademisi).

> **Tips Profesional:** Karena Anda menggunakan **Drizzle**, jangan lupa manfaatkan `drizzle-kit studio` untuk melihat isi database SQLite Anda secara visual selama proses development.

---

Apakah Anda ingin saya buatkan **struktur folder project** yang ideal untuk stack ini, atau Anda ingin langsung melihat contoh **kodingan untuk Navbar** menggunakan Shadcn UI?