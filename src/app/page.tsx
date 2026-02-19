import Link from "next/link";
import { ArrowRight, BookOpen, Users, Image as ImageIcon, GraduationCap, CalendarDays, Megaphone, Scale, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getAnnouncements, getFullSiteConfig, getHeroSlides } from "@/db/queries";
import HeroSlider from "@/components/hero-slider";

const quickLinks = [
  { title: "Profil Fakultas", description: "Sejarah, visi & misi, dan akreditasi", href: "/profil", icon: BookOpen },
  { title: "Civitas Akademika", description: "Dosen, staf, dan organisasi mahasiswa", href: "/civitas", icon: Users },
  { title: "Galeri Kegiatan", description: "Dokumentasi foto dan video kegiatan", href: "/galeri", icon: ImageIcon },
  { title: "Info PMB", description: "Pendaftaran mahasiswa baru 2026", href: "/pmb", icon: GraduationCap },
];

const stats = [
  { number: "40+", label: "Tahun Berdiri" },
  { number: "5.000+", label: "Alumni" },
  { number: "30+", label: "Dosen Ahli" },
  { number: "B", label: "Akreditasi" },
];

export default function HomePage() {
  const announcementsList = getAnnouncements();
  const latestAnnouncements = announcementsList.reverse().slice(0, 3);
  const siteConfig = getFullSiteConfig();
  const slides = getHeroSlides();

  return (
    <>
      {/* ============ HERO SLIDER SECTION ============ */}
      <HeroSlider slides={slides} universityName={siteConfig.shortName} />

      {/* ============ STATS SECTION ============ */}
      <section className="py-12 bg-slate-50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-3xl font-bold text-brand-navy mb-1">{stat.number}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PENGUMUMAN TERBARU ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-1 w-8 rounded-full bg-brand-red" />
                <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Terbaru</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">Pengumuman</h2>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex text-brand-navy hover:text-brand-red">
              <Link href="#">
                Lihat Semua
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {latestAnnouncements.map((item) => (
              <Card key={item.id} className="group card-premium border-0 shadow-sm hover:shadow-xl bg-white overflow-hidden">
                {/* Red top line on hover */}
                <div className="h-1 bg-gradient-to-r from-brand-red to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      className={
                        item.category === "Pengumuman"
                          ? "bg-brand-red/10 text-brand-red border-brand-red/20 hover:bg-brand-red/20"
                          : "bg-brand-navy/10 text-brand-navy border-brand-navy/20 hover:bg-brand-navy/20"
                      }
                    >
                      {item.category === "Pengumuman" ? (
                        <Megaphone className="mr-1 h-3 w-3" />
                      ) : (
                        <CalendarDays className="mr-1 h-3 w-3" />
                      )}
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight group-hover:text-brand-navy transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 leading-relaxed">{item.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SAMBUTAN DEKAN ============ */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
        {/* Subtle decorative */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/3 rounded-full blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* Photo Placeholder */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center shadow-2xl shadow-brand-navy/20">
                <div className="text-center space-y-4 px-8">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                    <Scale className="h-10 w-10 text-brand-gold" />
                  </div>
                  <p className="text-sm text-white/50 font-medium">Foto Dekan</p>
                </div>
              </div>
              {/* Red accent corners */}
              <div className="absolute -bottom-3 -right-3 h-16 w-16 rounded-xl bg-brand-red/10 -z-10" />
              <div className="absolute -top-3 -left-3 h-12 w-12 rounded-xl bg-brand-gold/10 -z-10" />
            </div>

            {/* Quote */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="h-1 w-8 rounded-full bg-brand-red" />
                  <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Sambutan Dekan</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy mb-6">
                  Selamat Datang di Fakultas Hukum UNPAL
                </h2>
              </div>
              <blockquote className="relative pl-8 italic text-muted-foreground leading-relaxed text-base sm:text-lg">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-brand-red to-brand-red/20" />
                &ldquo;Fakultas Hukum Universitas Palembang terus berkomitmen untuk menjadi pusat keunggulan dalam pendidikan hukum. Kami percaya bahwa pendidikan hukum yang berkualitas adalah fondasi penting bagi terciptanya keadilan dan kesejahteraan masyarakat.&rdquo;
              </blockquote>
              <div className="flex items-center gap-4 pt-2">
                <div className="h-12 w-12 rounded-full bg-brand-navy/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-brand-navy" />
                </div>
                <div>
                  <p className="font-bold text-brand-navy">Prof. Dr. H. Ahmad Syarifuddin, S.H., M.H.</p>
                  <p className="text-sm text-muted-foreground">Dekan Fakultas Hukum</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ QUICK LINKS ============ */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center gap-2 justify-center mb-3">
              <span className="h-1 w-8 rounded-full bg-brand-red" />
              <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Jelajahi</span>
              <span className="h-1 w-8 rounded-full bg-brand-red" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-navy">Fakultas Hukum UNPAL</h2>
            <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
              Temukan informasi lengkap tentang fakultas, akademisi, kegiatan, dan pendaftaran.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link, i) => (
              <Link key={link.href} href={link.href} className="group">
                <Card className="h-full card-premium border-0 shadow-sm hover:shadow-xl bg-white overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-brand-red to-red-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <CardContent className="pt-8 pb-8 text-center space-y-5">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-navy/20">
                      <link.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-navy mb-1.5">{link.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{link.description}</p>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-sm font-medium text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">
                      Selengkapnya <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="relative py-20 sm:py-24 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 pattern-grid" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-red/10 rounded-full blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-8 w-8 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-5">
            Siap Bergabung dengan <span className="text-brand-gold">Fakultas Hukum</span> UNPAL?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Pendaftaran Mahasiswa Baru tahun akademik 2026/2027 telah dibuka. Raih masa depanmu sebagai Sarjana Hukum yang berintegritas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-gradient-to-r from-brand-red to-red-600 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold px-10 shadow-lg shadow-red-500/25">
              <Link href="/pmb">
                Daftar Sekarang
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base border-white/20 hover:bg-white/10 text-white bg-white/5">
              <Link href="/profil">Pelajari Lebih Lanjut</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
