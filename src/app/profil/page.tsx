import type { Metadata } from "next";
import { Award, BookOpen, Building2, Target, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getFullProfile } from "@/db/queries";

export const metadata: Metadata = {
    title: "Profil",
    description: "Sejarah, Visi & Misi, Struktur Organisasi, dan Akreditasi Fakultas Hukum Universitas Palembang.",
};

export default async function ProfilPage() {
    const profileData = await getFullProfile();
    return (
        <>
            {/* Hero Banner */}
            <section className="relative bg-brand-navy text-white py-20 sm:py-24 overflow-hidden">
                <div className="absolute inset-0 pattern-grid" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/8 rounded-full blur-[120px]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-1 w-8 rounded-full bg-brand-red" />
                        <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Profil</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Mengenal <span className="text-brand-gold">Fakultas Hukum</span>
                    </h1>
                    <p className="text-white/60 mt-3 max-w-2xl text-lg">
                        Lebih dari empat dekade menghasilkan lulusan hukum berkualitas untuk Indonesia.
                    </p>
                </div>
            </section>

            {/* Content Tabs */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Tabs defaultValue="sejarah" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-1.5 bg-muted p-1.5 rounded-xl">
                            <TabsTrigger value="sejarah" className="gap-2 py-3 rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">
                                <BookOpen className="h-4 w-4 hidden sm:inline-block" />
                                Sejarah
                            </TabsTrigger>
                            <TabsTrigger value="visi-misi" className="gap-2 py-3 rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">
                                <Target className="h-4 w-4 hidden sm:inline-block" />
                                Visi & Misi
                            </TabsTrigger>
                            <TabsTrigger value="struktur" className="gap-2 py-3 rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">
                                <Building2 className="h-4 w-4 hidden sm:inline-block" />
                                Struktur
                            </TabsTrigger>
                            <TabsTrigger value="akreditasi" className="gap-2 py-3 rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white data-[state=active]:shadow-md">
                                <Award className="h-4 w-4 hidden sm:inline-block" />
                                Akreditasi
                            </TabsTrigger>
                        </TabsList>

                        {/* SEJARAH */}
                        <TabsContent value="sejarah" className="mt-8">
                            <Card className="border-0 shadow-md">
                                <CardContent className="pt-8 sm:pt-10">
                                    <h2 className="text-2xl font-bold text-foreground mb-6 red-accent-line pb-3">Sejarah Fakultas Hukum</h2>
                                    <div className="max-w-none">
                                        {profileData.sejarah.split("\n\n").map((paragraph, i) => (
                                            <p key={i} className="text-muted-foreground leading-relaxed mb-5 last:mb-0 text-[15px]">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* VISI & MISI */}
                        <TabsContent value="visi-misi" className="mt-8">
                            <div className="grid gap-6 lg:grid-cols-2">
                                <Card className="border-0 shadow-md bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
                                    <CardContent className="pt-8 sm:pt-10">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                                                <Target className="h-5 w-5 text-brand-gold" />
                                            </div>
                                            <h2 className="text-xl font-bold">Visi</h2>
                                        </div>
                                        <p className="text-white/80 leading-relaxed italic text-lg">
                                            &ldquo;{profileData.visi}&rdquo;
                                        </p>
                                    </CardContent>
                                </Card>

                                <Card className="border-0 shadow-md">
                                    <CardContent className="pt-8 sm:pt-10">
                                        <h2 className="text-xl font-bold text-foreground mb-5">Misi</h2>
                                        <ol className="space-y-4">
                                            {profileData.misi.map((item, i) => (
                                                <li key={i} className="flex gap-3">
                                                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red text-sm font-bold">
                                                        {i + 1}
                                                    </span>
                                                    <span className="text-muted-foreground leading-relaxed text-[15px]">{item}</span>
                                                </li>
                                            ))}
                                        </ol>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* STRUKTUR ORGANISASI */}
                        <TabsContent value="struktur" className="mt-8">
                            <Card className="border-0 shadow-md">
                                <CardContent className="pt-8 sm:pt-10">
                                    <h2 className="text-2xl font-bold text-foreground mb-8 red-accent-line pb-3">Struktur Organisasi</h2>
                                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                        {[
                                            { title: "Dekan", name: profileData.strukturOrganisasi.dekan, highlight: true },
                                            { title: "Wakil Dekan I (Bidang Akademik)", name: profileData.strukturOrganisasi.wakil1 },
                                            { title: "Wakil Dekan II (Bidang Umum & Keuangan)", name: profileData.strukturOrganisasi.wakil2 },
                                            { title: "Ketua Program Studi", name: profileData.strukturOrganisasi.kaprodi },
                                            { title: "Sekretaris Program Studi", name: profileData.strukturOrganisasi.sekretarisProdi },
                                            { title: "Kepala Tata Usaha", name: profileData.strukturOrganisasi.katuTataUsaha },
                                        ].map((item, i) => (
                                            <Card key={i} className={`card-premium ${item.highlight ? 'border-brand-red/20 bg-brand-red/3 shadow-sm' : 'bg-muted border-0'}`}>
                                                <CardContent className="pt-5 pb-5">
                                                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">
                                                        {item.title}
                                                    </p>
                                                    <p className="font-bold text-sm text-foreground">{item.name}</p>
                                                    {item.highlight && <div className="h-0.5 w-10 bg-brand-red rounded mt-3" />}
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* AKREDITASI */}
                        <TabsContent value="akreditasi" className="mt-8">
                            <Card className="border-0 shadow-md">
                                <CardContent className="pt-8 sm:pt-10">
                                    <div className="flex flex-col sm:flex-row gap-8 items-start">
                                        <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-light text-white shadow-xl glow-blue">
                                            <div className="text-center">
                                                <p className="text-5xl font-black">{profileData.akreditasi.grade}</p>
                                                <p className="text-xs text-white/60 mt-1">Akreditasi</p>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-bold text-foreground">Akreditasi Program Studi</h2>
                                            <p className="text-muted-foreground leading-relaxed text-[15px]">
                                                {profileData.akreditasi.description}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 text-sm pt-2">
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                                                    <CheckCircle2 className="h-4 w-4 text-brand-red" />
                                                    <span className="text-muted-foreground">{profileData.akreditasi.sk}</span>
                                                </div>
                                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted">
                                                    <span className="font-semibold text-foreground">Berlaku:</span>
                                                    <span className="text-muted-foreground">{profileData.akreditasi.validUntil}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>
        </>
    );
}
