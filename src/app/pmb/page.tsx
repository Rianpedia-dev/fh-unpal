import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, DollarSign, CalendarDays, FileText, GraduationCap, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPmbTimeline, getTuitionFees, getFullSiteConfig } from "@/db/queries";

export const metadata: Metadata = {
    title: "Info PMB",
    description: "Informasi Penerimaan Mahasiswa Baru (PMB) Fakultas Hukum Universitas Palembang.",
};

export default function PMBPage() {
    const pmbTimeline = getPmbTimeline();
    const tuitionFees = getTuitionFees();
    const siteConfig = getFullSiteConfig();

    return (
        <>
            {/* Hero Banner */}
            <section className="relative overflow-hidden bg-brand-navy text-white py-20 sm:py-28">
                <div className="absolute inset-0 pattern-grid" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-1 w-8 rounded-full bg-brand-red" />
                        <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">PMB 2026/2027</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Penerimaan <span className="text-brand-gold">Mahasiswa Baru</span>
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-white/60">
                        Raih masa depanmu sebagai Sarjana Hukum yang berintegritas di Fakultas Hukum {siteConfig.university}.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button size="lg" className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-8 shadow-lg shadow-red-500/25">
                            <FileText className="mr-2 h-4 w-4" />
                            Daftar Online
                        </Button>
                        <Button size="lg" variant="outline" className="text-base border-white/20 hover:bg-white/10 text-white bg-white/5">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Lihat Jadwal
                        </Button>
                    </div>
                </div>
            </section>

            {/* ============ ALUR PENDAFTARAN ============ */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="flex items-center gap-2 justify-center mb-3">
                            <span className="h-1 w-8 rounded-full bg-brand-red" />
                            <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Langkah-Langkah</span>
                            <span className="h-1 w-8 rounded-full bg-brand-red" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">Alur Pendaftaran</h2>
                        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">Ikuti langkah berikut untuk mendaftar di Fakultas Hukum UNPAL.</p>
                    </div>

                    {/* Timeline */}
                    <div className="relative max-w-3xl mx-auto">
                        {/* Vertical line */}
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-red via-brand-navy to-brand-navy/20 hidden sm:block" />

                        <div className="space-y-6">
                            {pmbTimeline.map((item) => (
                                <div key={item.step} className="relative flex gap-6 sm:gap-8 group">
                                    {/* Step Circle */}
                                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-brand-navy-light text-white shadow-lg group-hover:from-brand-red group-hover:to-red-600 transition-all duration-500 group-hover:shadow-red-500/20 group-hover:scale-110">
                                        <span className="text-lg font-bold">{item.step}</span>
                                    </div>

                                    {/* Content */}
                                    <Card className="flex-1 card-premium border-0 shadow-sm hover:shadow-xl bg-white overflow-hidden">
                                        <div className="h-0.5 bg-gradient-to-r from-brand-red to-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                        <CardContent className="pt-5 pb-5">
                                            <div className="flex items-start justify-between gap-4 mb-2">
                                                <h3 className="font-bold text-brand-navy">{item.title}</h3>
                                                <Badge variant="outline" className="shrink-0 text-xs border-brand-navy/20 text-brand-navy">
                                                    <Clock className="mr-1 h-3 w-3" />
                                                    {item.period}
                                                </Badge>
                                            </div>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ============ BIAYA KULIAH ============ */}
            <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy mb-4">
                            <DollarSign className="h-7 w-7" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">Biaya Kuliah</h2>
                        <p className="text-muted-foreground mt-3">Rincian biaya pendidikan di Fakultas Hukum UNPAL.</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <Card className="border-0 shadow-md overflow-hidden">
                            {/* Table header accent */}
                            <div className="h-1 bg-gradient-to-r from-brand-red via-brand-navy to-brand-gold" />
                            <CardContent className="pt-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead>
                                            <tr className="bg-brand-navy text-white">
                                                <th className="text-left py-4 px-5 font-semibold rounded-tl-none">Komponen</th>
                                                <th className="text-right py-4 px-5 font-semibold">Jumlah</th>
                                                <th className="text-right py-4 px-5 font-semibold rounded-tr-none">Keterangan</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tuitionFees.map((fee, i) => (
                                                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                                                    <td className="py-4 px-5 font-medium">{fee.component}</td>
                                                    <td className="py-4 px-5 text-right font-bold text-brand-red">{fee.amount}</td>
                                                    <td className="py-4 px-5 text-right text-muted-foreground">{fee.note}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ============ JADWAL SELEKSI ============ */}
            <section className="py-20 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red mb-4">
                            <CalendarDays className="h-7 w-7" />
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">Jadwal Seleksi</h2>
                        <p className="text-muted-foreground mt-3">Jadwal penting PMB tahun akademik 2026/2027.</p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
                        {[
                            { title: "Pendaftaran Gelombang I", date: "1 Maret — 30 April 2026", status: "Dibuka" },
                            { title: "Pendaftaran Gelombang II", date: "1 Mei — 30 Juni 2026", status: "Segera" },
                            { title: "Ujian Seleksi Gel. I", date: "10 Mei 2026", status: "Segera" },
                            { title: "Ujian Seleksi Gel. II", date: "10 Juli 2026", status: "Segera" },
                            { title: "Pengumuman Hasil", date: "Agustus 2026", status: "Menunggu" },
                            { title: "Daftar Ulang", date: "Agustus — September 2026", status: "Menunggu" },
                        ].map((item, i) => (
                            <Card key={i} className="card-premium border-0 shadow-sm hover:shadow-xl bg-white overflow-hidden group">
                                <div className="h-1 bg-gradient-to-r from-brand-red to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                <CardContent className="pt-5 pb-5">
                                    <div className="flex items-start justify-between gap-2 mb-3">
                                        <h3 className="font-bold text-sm text-brand-navy">{item.title}</h3>
                                        <Badge
                                            className={`text-xs shrink-0 ${item.status === "Dibuka"
                                                ? "bg-brand-red text-white"
                                                : item.status === "Segera"
                                                    ? "bg-brand-gold/20 text-brand-gold border-brand-gold/30"
                                                    : "bg-slate-100 text-muted-foreground"
                                                }`}
                                        >
                                            {item.status}
                                        </Badge>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <CalendarDays className="h-3.5 w-3.5 text-brand-red/60" />
                                        <span>{item.date}</span>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="relative py-20 sm:py-24 bg-brand-navy overflow-hidden">
                <div className="absolute inset-0 pattern-grid" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[150px]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <Sparkles className="h-8 w-8 text-brand-gold mx-auto mb-6" />
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
                        Siap Menjadi Bagian dari <span className="text-brand-gold">Fakultas Hukum</span>?
                    </h2>
                    <p className="text-lg text-white/60 max-w-lg mx-auto mb-10">
                        Jangan lewatkan kesempatan untuk meraih gelar Sarjana Hukum di Sumatera Selatan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-10 shadow-lg shadow-red-500/25">
                            Daftar Sekarang
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-base border-white/20 hover:bg-white/10 text-white bg-white/5">
                            <Link href="/">Kembali ke Beranda</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
