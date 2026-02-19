import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  ChevronRight,
  Play,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Scale,
  Sparkles,
  ArrowRight,
  Quote
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { MotionDiv } from "@/components/motion-wrapper";
import {
  getAnnouncements,
  getFullSiteConfig,
  getHeroSlides,
  getFullProfile,
  getLecturers
} from '@/db/queries';
import { HomeNewsSection } from "@/components/home-news-section";
import { PartnersCarousel } from "@/components/partners-carousel";

export default async function Home() {
  // Ambil data dari database
  const announcements = await getAnnouncements();
  const latestNews = announcements.reverse().slice(0, 3);
  const siteConfig = await getFullSiteConfig();
  const slides = await getHeroSlides();
  const profile = await getFullProfile();
  const lecturers = await getLecturers();

  // Data hero (gunakan slide pertama)
  const heroData = {
    title: "Selamat Datang di Fakultas Hukum Universitas Palembang",
    subtitle: "Membangun generasi cerdas dan berintegritas melalui pendidikan kelas dunia dengan teknologi terkini.",
    imageUrl: slides[0]?.imageUrl || null,
    buttonText: "Mulai Menjelajah",
    buttonLink: "/pmb"
  };

  // Data partner (statis/Sesuai Referensi)
  const partners = [
    { id: '1', name: 'Intel Indonesia', logo: null },
    { id: '2', name: 'Institut Teknologi Bandung', logo: null },
    { id: '3', name: 'Harvard University', logo: null },
    { id: '4', name: 'MIT', logo: null },
    { id: '5', name: 'PT. Solusi Digital', logo: null },
    { id: '6', name: 'Universitas Gadjah Mada', logo: null },
    { id: '7', name: 'Universitas Indonesia', logo: null },
    { id: '8', name: 'Stanford University', logo: null },
    { id: '9', name: 'Cambridge University', logo: null },
    { id: '10', name: 'Oxford University', logo: null },
  ];

  // Data testimonial (statis/mock karena belum ada di schema)
  const testimonials = [
    {
      id: "1",
      name: "Budi Santoso, S.H.",
      role: "Alumni 2018 - Advokat",
      content: "Fakultas Hukum UNPAL memberikan pondasi teori dan praktik yang sangat kuat bagi karir profesional saya.",
      image: null,
      rating: 5
    },
    {
      id: "2",
      name: "Siska Putri, S.H., M.H.",
      role: "Alumni 2015 - Jaksa",
      content: "Dosen yang kompeten dan lingkungan akademik yang mendukung membantu saya meraih cita-cita menjadi penegak hukum.",
      image: null,
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-transparent overflow-hidden relative">
      <div className="container mx-auto px-4 pt-4 pb-8 relative z-10 text-center">
        {/* Hero Section */}
        <div className="relative pt-12 pb-6 md:pt-20 md:pb-32 overflow-hidden z-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px] -z-10"></div>

          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-left"
              >
                <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.1] tracking-tighter">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-700 to-brand-red dark:from-red-400 dark:via-red-500 dark:to-brand-red drop-shadow-[0_2px_10px_rgba(239,68,68,0.1)] dark:drop-shadow-[0_2px_20px_rgba(239,68,68,0.3)] filter brightness-110">
                    {heroData.title}
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-xl leading-relaxed font-medium">
                  {heroData.subtitle}
                </p>

                <div className="flex flex-wrap gap-5">
                  <Button asChild size="lg" className="rounded-full px-10 h-14 font-bold bg-white text-black hover:bg-gray-200 transition-all duration-300 shadow-xl">
                    <Link href={heroData.buttonLink || "/pmb"}>
                      {heroData.buttonText}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-10 h-14 font-bold border-border text-foreground hover:bg-accent transition-all duration-300">
                    <Link href="/profil">
                      Pendaftaran
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="relative group">
                  <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border-2 border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.8)] transform transition-all duration-700 hover:scale-[1.02]">
                    <div className="absolute inset-0 border-[8px] border-brand-navy/30 pointer-events-none z-10 rounded-[2.5rem]"></div>
                    {heroData.imageUrl ? (
                      <img src={heroData.imageUrl} className="w-full h-full object-cover" alt="Hero" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center p-12">
                        <div className="relative text-center">
                          <MotionDiv
                            className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Scale className="w-10 h-10 text-brand-gold" />
                          </MotionDiv>
                          <div className="space-y-2">
                            <p className="text-2xl font-bold text-white tracking-widest">{siteConfig.shortName}</p>
                            <div className="h-1 w-12 bg-brand-red mx-auto rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: GraduationCap, value: "40+", label: "Tahun Berdiri", color: "text-blue-500", bg: "bg-blue-500/10" },
            { icon: Users, value: "5.000+", label: "Alumni Sukses", color: "text-purple-500", bg: "bg-purple-500/10" },
            { icon: Award, value: profile.akreditasi.grade, label: "Akreditasi BAN-PT", color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { icon: BookOpen, value: `${lecturers.length}+`, label: "Dosen Pengajar", color: "text-orange-500", bg: "bg-orange-500/10" }
          ].map((stat, i) => (
            <MotionDiv
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-[2rem] border border-white/5 text-center group hover:border-foreground/10 transition-all duration-500"
            >
              <div className={cn("w-14 h-14 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform duration-500 group-hover:rotate-6", stat.bg)}>
                <stat.icon className={cn("w-7 h-7", stat.color)} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.label}</p>
            </MotionDiv>
          ))}
        </div>
      </div>

      {/* Sambutan Section */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Section Title */}
          <MotionDiv
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Kata Sambutan Dekan
            </h2>
            <div className="w-24 h-1.5 bg-brand-red mx-auto mt-4 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
          </MotionDiv>

          {/* Profile Photo */}
          <MotionDiv
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 mb-[-64px]" // Negative margin to overlap with container
          >
            <div className="group relative">
              <div className="absolute inset-0 bg-brand-red rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border shadow-2xl flex items-center justify-center bg-muted">
                <Users className="w-20 h-20 text-muted-foreground/10" />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 to-transparent"></div>
              </div>
              {/* Decorative Ring */}
              <div className="absolute -inset-2 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
            </div>
          </MotionDiv>

          {/* Welcome Card */}
          <MotionDiv
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative pt-24 pb-16 px-8 md:px-20 rounded-[3rem] overflow-hidden bg-card/50 backdrop-blur-xl border border-border shadow-[0_40px_80px_rgba(0,0,0,0.1)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 pattern-grid opacity-[0.03] dark:opacity-10"></div>

              {/* Quote Icons */}
              <Quote className="absolute top-12 left-12 w-12 h-12 text-muted-foreground/10 rotate-180" />
              <Quote className="absolute bottom-12 right-12 w-12 h-12 text-muted-foreground/10" />

              <div className="relative z-10 text-center space-y-8">
                <p className="text-lg md:text-xl font-bold text-foreground italic">
                  Assalamualaikum Wr. Wb.
                </p>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Fakultas Hukum Universitas Palembang berkomitmen untuk mencetak lulusan yang cerdas secara akademik, berintegritas tinggi, dan mampu menjawab tantangan hukum di era digital. Kami mengedepankan kualitas pendidikan berbasis moral dan profesionalisme. Kami terus memperkuat ekosistem pembelajaran yang inklusif, adaptif, dan berkelanjutan untuk melahirkan generasi penegak hukum yang unggul.
                </p>

                <p className="text-lg md:text-xl font-bold text-foreground italic">
                  Wassalamualaikum Wr. Wb.
                </p>

                <div className="pt-8 space-y-2">
                  <h4 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-wide">
                    {profile.strukturOrganisasi.dekan}
                  </h4>
                  <p className="text-brand-red font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
                    Dekan Fakultas Hukum
                  </p>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* News Section */}
      <HomeNewsSection latestNews={latestNews} locale="id" />

      {/* Testimonials */}
      <div className="container mx-auto px-4 py-24 relative z-10 overflow-hidden">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Apa Kata Mereka?</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground">Kesan bimbingan dan pengalaman belajar dari alumni kami.</p>
        </MotionDiv>
        <TestimonialsCarousel testimonials={testimonials} />
      </div>

      {/* Partners section */}
      <div className="container mx-auto px-4 py-24 relative z-10 mb-12">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Kemitraan & Kerjasama Kami</h2>
          <div className="w-24 h-1 bg-brand-red mx-auto rounded-full"></div>
        </MotionDiv>
        <PartnersCarousel partners={partners} />
      </div>

    </div>
  );
}

