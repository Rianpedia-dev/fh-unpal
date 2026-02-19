// ============================================================
// DATA STATIS - Website Fakultas Hukum
// ============================================================

export const siteConfig = {
    name: "Fakultas Hukum",
    university: "Universitas Palembang",
    shortName: "FH UNPAL",
    description:
        "Fakultas Hukum Universitas Palembang — Mencetak Sarjana Hukum yang Berintegritas, Profesional, dan Berdaya Saing.",
    address: "Jl. Dharmapala No.1A, Bukit Besar, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30139",
    phone: "(0711) 321059",
    email: "fh@unpal.ac.id",
    socialMedia: {
        instagram: "https://instagram.com/fh_unpal",
        facebook: "https://facebook.com/fhunpal",
        youtube: "https://youtube.com/@fhunpal",
    },
};

// ============================================================
// NAVIGASI
// ============================================================
export const navLinks = [
    { label: "Beranda", href: "/" },
    { label: "Profil", href: "/profil" },
    { label: "Civitas Akademika", href: "/civitas" },
    { label: "Galeri", href: "/galeri" },
    { label: "Info PMB", href: "/pmb" },
];

// ============================================================
// PENGUMUMAN
// ============================================================
export interface Announcement {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: "Berita" | "Pengumuman";
}

export const announcements: Announcement[] = [
    {
        id: 1,
        title: "Pendaftaran Wisuda Semester Ganjil 2025/2026 Dibuka",
        excerpt:
            "Bagi mahasiswa yang telah memenuhi syarat kelulusan, pendaftaran wisuda semester ganjil telah dibuka. Segera lengkapi berkas administrasi Anda.",
        date: "15 Februari 2026",
        category: "Pengumuman",
    },
    {
        id: 2,
        title: "Seminar Nasional Hukum Siber dan Perlindungan Data Pribadi",
        excerpt:
            "Fakultas Hukum UNPAL menggelar seminar nasional bertema 'Tantangan Hukum Siber di Era Digital' dengan pembicara dari praktisi dan akademisi terkemuka.",
        date: "10 Februari 2026",
        category: "Berita",
    },
    {
        id: 3,
        title: "Pengumuman Hasil UAS Semester Ganjil 2025/2026",
        excerpt:
            "Hasil Ujian Akhir Semester (UAS) semester ganjil tahun akademik 2025/2026 telah dipublikasikan. Silakan cek melalui portal akademik.",
        date: "5 Februari 2026",
        category: "Pengumuman",
    },
];

// ============================================================
// DOSEN
// ============================================================
export interface Lecturer {
    id: number;
    name: string;
    nidn: string;
    position: string;
    specialization: string;
    education: string;
    imageUrl: string;
}

export const lecturers: Lecturer[] = [
    {
        id: 1,
        name: "Prof. Dr. H. Ahmad Syarifuddin, S.H., M.H.",
        nidn: "196503151990031001",
        position: "Dekan",
        specialization: "Hukum Tata Negara",
        education: "S3 Ilmu Hukum — Universitas Indonesia",
        imageUrl: "/images/dosen/placeholder-1.jpg",
    },
    {
        id: 2,
        name: "Dr. Hj. Siti Nurhaliza, S.H., M.Hum.",
        nidn: "197201201998032001",
        position: "Wakil Dekan I",
        specialization: "Hukum Perdata",
        education: "S3 Ilmu Hukum — Universitas Gadjah Mada",
        imageUrl: "/images/dosen/placeholder-2.jpg",
    },
    {
        id: 3,
        name: "Dr. Muhammad Ridwan, S.H., M.H.",
        nidn: "198005052005011001",
        position: "Wakil Dekan II",
        specialization: "Hukum Pidana",
        education: "S3 Ilmu Hukum — Universitas Diponegoro",
        imageUrl: "/images/dosen/placeholder-3.jpg",
    },
    {
        id: 4,
        name: "Dr. Hj. Rahmawati, S.H., M.H.",
        nidn: "197506152003122001",
        position: "Kaprodi",
        specialization: "Hukum Internasional",
        education: "S3 Ilmu Hukum — Universitas Padjadjaran",
        imageUrl: "/images/dosen/placeholder-4.jpg",
    },
    {
        id: 5,
        name: "Bambang Hermanto, S.H., M.H.",
        nidn: "198203102008011001",
        position: "Sekretaris Prodi",
        specialization: "Hukum Administrasi Negara",
        education: "S2 Ilmu Hukum — Universitas Sriwijaya",
        imageUrl: "/images/dosen/placeholder-5.jpg",
    },
    {
        id: 6,
        name: "Dr. Indah Permata Sari, S.H., LL.M.",
        nidn: "198507202010122001",
        position: "Dosen",
        specialization: "Hukum Bisnis",
        education: "S3 Ilmu Hukum — Universitas Airlangga",
        imageUrl: "/images/dosen/placeholder-6.jpg",
    },
];

// ============================================================
// STAFF
// ============================================================
export interface Staff {
    id: number;
    name: string;
    position: string;
    imageUrl: string;
}

export const staffMembers: Staff[] = [
    { id: 1, name: "Hendra Wijaya, S.E.", position: "Kepala Tata Usaha", imageUrl: "/images/staff/placeholder-1.jpg" },
    { id: 2, name: "Dewi Anggraini, A.Md.", position: "Staf Akademik", imageUrl: "/images/staff/placeholder-2.jpg" },
    { id: 3, name: "Rizky Pratama", position: "Staf Keuangan", imageUrl: "/images/staff/placeholder-3.jpg" },
    { id: 4, name: "Nur Aisyah, S.Kom.", position: "Staf IT", imageUrl: "/images/staff/placeholder-4.jpg" },
];

// ============================================================
// ORGANISASI MAHASISWA
// ============================================================
export interface Organization {
    id: number;
    name: string;
    description: string;
    type: string;
}

export const organizations: Organization[] = [
    {
        id: 1,
        name: "BEM Fakultas Hukum",
        description: "Badan Eksekutif Mahasiswa yang menjadi wadah aspirasi dan kegiatan kemahasiswaan.",
        type: "Eksekutif",
    },
    {
        id: 2,
        name: "DPM Fakultas Hukum",
        description: "Dewan Perwakilan Mahasiswa yang mengawasi dan menampung aspirasi mahasiswa.",
        type: "Legislatif",
    },
    {
        id: 3,
        name: "LBH Kampus",
        description: "Lembaga Bantuan Hukum Kampus yang memberikan bantuan hukum kepada masyarakat.",
        type: "UKM",
    },
    {
        id: 4,
        name: "Moot Court Community",
        description: "Komunitas peradilan semu untuk melatih kemampuan beracara di pengadilan.",
        type: "UKM",
    },
];

// ============================================================
// GALERI
// ============================================================
export interface GalleryItem {
    id: number;
    title: string;
    category: "Akademik" | "Kemahasiswaan" | "Seremonial";
    imageUrl: string;
    date: string;
}

export const galleryItems: GalleryItem[] = [
    { id: 1, title: "Wisuda Periode September 2025", category: "Seremonial", imageUrl: "/images/gallery/wisuda.jpg", date: "September 2025" },
    { id: 2, title: "Seminar Nasional Hukum Digital", category: "Akademik", imageUrl: "/images/gallery/seminar.jpg", date: "Agustus 2025" },
    { id: 3, title: "Kompetisi Moot Court Tingkat Nasional", category: "Kemahasiswaan", imageUrl: "/images/gallery/mootcourt.jpg", date: "Juli 2025" },
    { id: 4, title: "Dies Natalis Fakultas Hukum ke-45", category: "Seremonial", imageUrl: "/images/gallery/diesnatalis.jpg", date: "Juni 2025" },
    { id: 5, title: "Workshop Legal Drafting", category: "Akademik", imageUrl: "/images/gallery/workshop.jpg", date: "Mei 2025" },
    { id: 6, title: "Bakti Sosial Mahasiswa Hukum", category: "Kemahasiswaan", imageUrl: "/images/gallery/baksos.jpg", date: "April 2025" },
    { id: 7, title: "Kuliah Umum Hukum Lingkungan", category: "Akademik", imageUrl: "/images/gallery/kuliahumumm.jpg", date: "Maret 2025" },
    { id: 8, title: "Penerimaan Mahasiswa Baru 2025", category: "Seremonial", imageUrl: "/images/gallery/pmb.jpg", date: "Februari 2025" },
];

// ============================================================
// INFO PMB
// ============================================================
export interface TimelineStep {
    step: number;
    title: string;
    description: string;
    period: string;
}

export const pmbTimeline: TimelineStep[] = [
    { step: 1, title: "Pendaftaran Online", description: "Mengisi formulir pendaftaran secara online melalui website PMB UNPAL.", period: "Maret — Juni 2026" },
    { step: 2, title: "Pembayaran Biaya Pendaftaran", description: "Melakukan pembayaran biaya pendaftaran melalui bank yang ditunjuk.", period: "Setelah Pendaftaran" },
    { step: 3, title: "Ujian Seleksi", description: "Mengikuti ujian tertulis yang meliputi Tes Potensi Akademik dan Tes Bahasa Inggris.", period: "Juli 2026" },
    { step: 4, title: "Pengumuman Hasil", description: "Hasil seleksi diumumkan melalui website PMB UNPAL.", period: "Agustus 2026" },
    { step: 5, title: "Daftar Ulang", description: "Melakukan daftar ulang dengan melengkapi berkas administrasi dan pembayaran SPP.", period: "Agustus — September 2026" },
];

export interface FeeItem {
    component: string;
    amount: string;
    note: string;
}

export const tuitionFees: FeeItem[] = [
    { component: "Biaya Pendaftaran", amount: "Rp 350.000", note: "Sekali bayar" },
    { component: "SPP per Semester", amount: "Rp 3.500.000", note: "Per semester" },
    { component: "Biaya Pengembangan", amount: "Rp 5.000.000", note: "Sekali bayar" },
    { component: "Biaya Praktikum", amount: "Rp 500.000", note: "Per semester" },
    { component: "Biaya Wisuda", amount: "Rp 1.500.000", note: "Sekali bayar" },
];

// ============================================================
// PROFIL
// ============================================================
export const profileData = {
    sejarah: `Fakultas Hukum Universitas Palembang didirikan pada tahun 1981 berdasarkan Surat Keputusan Menteri Pendidikan dan Kebudayaan Republik Indonesia. Sejak awal berdirinya, Fakultas Hukum UNPAL berkomitmen untuk menghasilkan lulusan yang berkualitas dan memiliki integritas tinggi dalam bidang hukum.

Dalam perjalanannya selama lebih dari empat dekade, Fakultas Hukum UNPAL telah melahirkan ribuan alumni yang berkarir di berbagai bidang, mulai dari advokat, jaksa, hakim, notaris, hingga pejabat pemerintahan. Keberhasilan alumni-alumni ini menjadi bukti nyata kualitas pendidikan yang diberikan oleh Fakultas Hukum UNPAL.

Fakultas Hukum UNPAL terus berkembang dengan meningkatkan kualitas kurikulum, fasilitas, dan tenaga pengajar. Kerjasama dengan berbagai institusi hukum, baik di tingkat nasional maupun internasional, terus diperluas untuk memberikan pengalaman belajar terbaik bagi mahasiswa.`,

    visi: "Menjadi Fakultas Hukum yang unggul, bermutu, dan berdaya saing dalam menghasilkan Sarjana Hukum yang profesional, berintegritas, dan berwawasan global pada tahun 2030.",

    misi: [
        "Menyelenggarakan pendidikan hukum yang berkualitas dan berorientasi pada kebutuhan masyarakat.",
        "Melaksanakan penelitian hukum yang inovatif dan bermanfaat bagi pengembangan ilmu hukum.",
        "Menyelenggarakan pengabdian kepada masyarakat melalui penyuluhan dan bantuan hukum.",
        "Mengembangkan kerjasama dengan institusi hukum di tingkat nasional dan internasional.",
        "Membina kehidupan akademik yang demokratis, bermartabat, dan berkeadilan.",
    ],

    akreditasi: {
        grade: "B",
        sk: "SK BAN-PT No. 1234/SK/BAN-PT/Akred/S/XII/2023",
        validUntil: "Desember 2028",
        description:
            "Fakultas Hukum Universitas Palembang telah memperoleh akreditasi B dari Badan Akreditasi Nasional Perguruan Tinggi (BAN-PT), yang menunjukkan kualitas pendidikan yang baik dan memenuhi standar nasional.",
    },

    strukturOrganisasi: {
        dekan: "Prof. Dr. H. Ahmad Syarifuddin, S.H., M.H.",
        wakil1: "Dr. Hj. Siti Nurhaliza, S.H., M.Hum.",
        wakil2: "Dr. Muhammad Ridwan, S.H., M.H.",
        kaprodi: "Dr. Hj. Rahmawati, S.H., M.H.",
        sekretarisProdi: "Bambang Hermanto, S.H., M.H.",
        katuTataUsaha: "Hendra Wijaya, S.E.",
    },
};
