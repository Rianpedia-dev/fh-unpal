"use client";

import Link from "next/link";
import { ChevronRight, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MotionDiv } from "@/components/motion-wrapper";

interface NewsItem {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

interface HomeNewsSectionProps {
    latestNews: NewsItem[];
    locale?: string;
    uniProfile?: any;
}

export function HomeNewsSection({ latestNews, locale = "id", uniProfile }: HomeNewsSectionProps) {
    return (
        <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl font-bold text-foreground mb-4">Berita & Pengumuman</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-orange-400 rounded-full"></div>
                </MotionDiv>
                <Button asChild variant="outline" className="rounded-full px-8 h-11 font-bold group shadow-xl hover:bg-brand-red hover:text-white transition-all duration-300">
                    <Link href={`/${locale}/berita-media/berita`}>
                        Lihat Semua Berita
                        <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {latestNews.map((news, index) => (
                    <MotionDiv
                        key={news.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -10 }}
                        className="h-full"
                    >
                        <Card className="h-full glass-card border-white/10 hover:shadow-[0_20px_40px_rgba(185,28,28,0.1)] transition-all duration-500 overflow-hidden flex flex-col group">
                            <div className="h-1 bg-gradient-to-r from-brand-red to-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            <CardContent className="p-8 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-6">
                                    <Badge className="bg-brand-red/10 text-brand-red border-brand-red/20 hover:bg-brand-red/20">
                                        {news.category}
                                    </Badge>
                                    <div className="flex items-center gap-2 text-xs font-medium text-foreground/40 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3 text-brand-red" />
                                        {news.date}
                                    </div>
                                </div>

                                <h3 className="font-bold text-xl text-foreground mb-4 line-clamp-2 group-hover:text-brand-red transition-colors">
                                    {news.title}
                                </h3>

                                <p className="text-foreground/60 mb-8 line-clamp-3 text-sm leading-relaxed">
                                    {news.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        href={`#`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-red group/link transition-all"
                                    >
                                        Baca Selengkapnya
                                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </MotionDiv>
                ))}
            </div>
        </div>
    );
}
