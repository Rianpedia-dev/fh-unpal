"use client";

import { useState, useMemo } from "react";
import { Camera, Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface GalleryItem {
    id: number;
    title: string;
    category: string;
    imageUrl?: string | null;
    date: string;
}

const categories = ["Semua", "Akademik", "Kemahasiswaan", "Seremonial"] as const;

export default function GalleryContent({ items }: { items: GalleryItem[] }) {
    const [activeFilter, setActiveFilter] = useState<string>("Semua");

    const filteredItems = useMemo(() => {
        if (activeFilter === "Semua") return items;
        return items.filter((item) => item.category === activeFilter);
    }, [activeFilter, items]);

    return (
        <>
            {/* Hero Banner */}
            <section className="relative bg-brand-navy text-white py-20 sm:py-24 overflow-hidden">
                <div className="absolute inset-0 pattern-grid" />
                <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px]" />
                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-1 w-8 rounded-full bg-brand-red" />
                        <span className="text-sm font-semibold text-brand-red uppercase tracking-wider">Galeri</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                        Galeri <span className="text-brand-gold">Kegiatan</span>
                    </h1>
                    <p className="text-white/60 mt-3 max-w-2xl text-lg">
                        Dokumentasi berbagai kegiatan dan momen penting Fakultas Hukum.
                    </p>
                </div>
            </section>

            {/* Filter & Gallery */}
            <section className="py-14 sm:py-20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap items-center gap-2 mb-10">
                        <Filter className="h-4 w-4 text-muted-foreground mr-1" />
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeFilter === cat
                                    ? "bg-brand-navy text-white shadow-md shadow-brand-navy/20"
                                    : "bg-slate-50 text-muted-foreground hover:bg-slate-100 hover:text-brand-navy"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredItems.map((item) => (
                            <Card key={item.id} className="group card-premium overflow-hidden border-0 shadow-sm hover:shadow-xl bg-white">
                                {/* Image Placeholder */}
                                <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-navy/10 via-brand-navy/5 to-brand-red/5 flex items-center justify-center overflow-hidden">
                                    {item.imageUrl ? (
                                        <Image
                                            src={item.imageUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <Camera className="h-12 w-12 text-brand-navy/20 group-hover:scale-110 group-hover:text-brand-navy/30 transition-all duration-500" />
                                    )}

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/60 transition-all duration-500 flex items-center justify-center">
                                        <Camera className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100" />
                                    </div>
                                    <div className="absolute top-3 left-3">
                                        <Badge
                                            className={`backdrop-blur-md text-xs shadow-sm ${item.category === "Akademik"
                                                ? "bg-blue-500/90 text-white"
                                                : item.category === "Kemahasiswaan"
                                                    ? "bg-brand-red/90 text-white"
                                                    : "bg-brand-gold/90 text-brand-navy"
                                                }`}
                                        >
                                            {item.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardContent className="pt-4 pb-4">
                                    <h3 className="font-bold text-sm leading-snug text-brand-navy group-hover:text-brand-red transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground mt-1.5">{item.date}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <Camera className="h-16 w-16 text-muted-foreground/15 mx-auto mb-4" />
                            <p className="text-muted-foreground">Belum ada galeri untuk kategori ini.</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
