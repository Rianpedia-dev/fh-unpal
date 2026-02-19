"use client";

import { useState, useMemo } from "react";
import { Search, Mail, User, GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Lecturer {
    id: number;
    name: string;
    nidn: string;
    position: string;
    specialization: string;
    education: string;
    email?: string | null;
    imageUrl?: string | null;
}

export default function CivitasContent({
    lecturers,
}: {
    lecturers: Lecturer[];
}) {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredLecturers = useMemo(() => {
        if (!searchQuery) return lecturers;
        const q = searchQuery.toLowerCase();
        return lecturers.filter(
            (d) =>
                d.name.toLowerCase().includes(q) ||
                d.specialization.toLowerCase().includes(q) ||
                d.nidn.toLowerCase().includes(q)
        );
    }, [searchQuery, lecturers]);

    return (
        <div className="min-h-screen bg-white">
            {/* Header / Hero */}
            <section className="relative pt-24 pb-20 bg-slate-50 border-b border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-brand-navy/20 text-brand-navy bg-brand-navy/5 font-semibold text-xs uppercase tracking-widest">
                        Fakultas Hukum Universitas Palembang
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Civitas <span className="text-brand-navy">Akademika</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Mengenal lebih dekat dengan jajaran dosen yang berdedikasi tinggi di lingkungan Fakultas Hukum.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {filteredLecturers.map((dosen) => (
                            <Card key={dosen.id} className="group border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-navy/20 transition-all duration-500 overflow-hidden bg-white rounded-3xl">
                                <CardContent className="p-0 text-center">
                                    {/* Image Section */}
                                    <div className="pt-8 pb-4 flex justify-center">
                                        <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-slate-50 shadow-inner bg-slate-50">
                                            {dosen.imageUrl ? (
                                                <Image
                                                    src={dosen.imageUrl}
                                                    alt={dosen.name}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <User className="w-12 h-12 text-slate-200" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <h3 className="text-slate-900 font-bold text-base mb-1 line-clamp-2 min-h-[48px] flex items-center justify-center leading-snug">
                                            {dosen.name}
                                        </h3>
                                        <div className="flex flex-col items-center gap-2 mb-4">
                                            <Badge className="bg-brand-navy text-white hover:bg-brand-navy/90 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                                {dosen.position}
                                            </Badge>
                                            <Badge variant="outline" className="px-3 py-0.5 border-brand-navy/20 text-brand-navy bg-brand-navy/5 text-[10px] uppercase font-bold tracking-wider">
                                                {dosen.specialization}
                                            </Badge>
                                        </div>
                                        <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-4">
                                            NIDN. {dosen.nidn}
                                        </p>

                                        <div className="space-y-3 pt-4 border-t border-slate-50">
                                            <div className="flex items-center gap-3 text-left">
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                                    <Mail className="h-3.5 w-3.5 text-slate-400" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-1">Email</p>
                                                    <p className="text-xs text-slate-600 font-medium truncate">{dosen.email || "-"}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 text-left">
                                                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
                                                    <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
                                                </div>
                                                <div className="min-w-0">
                                                    <p className="text-[9px] text-slate-400 uppercase font-bold leading-none mb-1">Pendidikan</p>
                                                    <p className="text-xs text-slate-600 font-medium line-clamp-1">{dosen.education}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {filteredLecturers.length === 0 && (
                        <div className="text-center py-20">
                            <div className="bg-slate-50 inline-flex p-6 rounded-3xl mb-4 border border-slate-100">
                                <Search className="h-8 w-8 text-slate-300" />
                            </div>
                            <h3 className="text-slate-900 font-bold text-xl">Tidak ditemukan</h3>
                            <p className="text-slate-500 max-w-xs mx-auto mt-2">Maaf, dosen yang Anda cari tidak ada dalam daftar kami.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
