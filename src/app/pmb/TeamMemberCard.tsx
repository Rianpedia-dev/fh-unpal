'use client';

import { MotionDiv } from "@/components/motion-wrapper";
import NextLink from "next/link";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

interface TeamMember {
    name: string;
    role: string;
    phone: string;
    email: string;
    image: string;
}

export function TeamMemberCard({ member, delay }: { member: TeamMember, delay: number }) {
    const [imgSrc, setImgSrc] = useState(member.image);

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-[2.5rem] border border-brand-red shadow-[0_0_20px_rgba(185,28,28,0.2)] relative overflow-hidden group flex flex-col items-center text-center hover:border-brand-red/80 transition-all duration-500"
        >
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-brand-red/0 group-hover:bg-brand-red/5 blur-3xl rounded-full transition-all duration-700"></div>

            <div className="relative mb-5 z-10">
                <div className="absolute -inset-3 bg-gradient-to-br from-brand-red/0 to-pink-500/0 group-hover:from-brand-red/20 group-hover:to-pink-500/10 blur-xl rounded-full transition-all duration-500"></div>
                <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-foreground/10 group-hover:border-brand-red relative z-10 transition-colors duration-300 bg-foreground/5 shadow-lg">
                    <img
                        src={imgSrc}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={() => {
                            setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff&size=200`);
                        }}
                    />
                </div>
            </div>

            <div className="space-y-1.5 mb-6 z-10">
                <h4 className="text-lg font-bold">{member.name}</h4>
                <p className="text-[10px] font-black text-brand-red tracking-[0.2em] uppercase">{member.role}</p>
            </div>

            {/* Divider */}
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent mb-5"></div>

            <div className="w-full space-y-2.5 z-10">
                <NextLink
                    href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 glass-card bg-foreground/3 shadow-none p-3.5 rounded-2xl border border-brand-red/10 hover:bg-brand-red/10 hover:border-brand-red/30 transition-all group/link"
                >
                    <Phone className="w-4 h-4 text-brand-red group-hover/link:scale-110 transition-transform" />
                    <span className="text-xs font-bold">{member.phone}</span>
                </NextLink>
                <NextLink
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-3 glass-card bg-foreground/3 shadow-none p-3.5 rounded-2xl border border-brand-red/10 hover:bg-brand-red/10 hover:border-brand-red/30 transition-all group/link"
                >
                    <Mail className="w-4 h-4 text-brand-red group-hover/link:scale-110 transition-transform" />
                    <span className="text-xs font-bold lowercase truncate max-w-[180px]">{member.email}</span>
                </NextLink>
            </div>
        </MotionDiv>
    );
}
