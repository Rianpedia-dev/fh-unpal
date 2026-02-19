"use client";

import * as React from "react";
import { MotionDiv } from "./motion-wrapper";
import { cn } from "@/lib/utils";
import { Image as ImageIcon } from "lucide-react";

interface Partner {
    id: string;
    name: string;
    logo?: string | null;
}

interface PartnersCarouselProps {
    partners: Partner[];
}

export function PartnersCarousel({ partners }: PartnersCarouselProps) {
    return (
        <div className="relative">
            {/* Grid layout - 5 columns on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {partners.map((partner, index) => (
                    <MotionDiv
                        key={partner.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>

                        {/* Main Card */}
                        <div className="relative flex flex-col items-center justify-center p-8 h-48 rounded-2xl bg-black/40 border border-white/5 backdrop-blur-sm group-hover:border-cyan-500/30 group-hover:bg-black/60 transition-all duration-500">

                            {/* Icon/Logo container */}
                            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-500">
                                {partner.logo ? (
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-10 w-auto object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                ) : (
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <ImageIcon className="w-8 h-8 text-white/10 group-hover:text-cyan-400 transition-colors duration-500 relative z-10" />
                                    </div>
                                )}
                            </div>

                            {/* Partner Name */}
                            <p className="text-xs font-bold text-center text-white/20 group-hover:text-white transition-colors duration-500 tracking-wider uppercase">
                                {partner.name}
                            </p>

                            {/* Decorative line on hover */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-500 group-hover:w-12 transition-all duration-500 rounded-full"></div>
                        </div>
                    </MotionDiv>
                ))}
            </div>

            {/* Side Scroll Indicator button (aesthetic only from ref image) */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/40 cursor-pointer hover:bg-white/10 hover:text-white transition-all">
                <div className="w-4 h-0.5 bg-current rounded-full relative">
                    <div className="absolute -top-1 -right-0.5 w-1.5 h-1.5 rounded-full bg-current"></div>
                </div>
            </div>
        </div>
    );
}
