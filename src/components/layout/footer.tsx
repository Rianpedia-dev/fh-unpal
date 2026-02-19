import Link from "next/link";
import { Scale, MapPin, Phone, Mail, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/data";
import { type SiteConfig } from "@/db/queries";

export default function Footer({ siteConfig }: { siteConfig: SiteConfig }) {
    return (
        <footer className="relative bg-brand-navy text-white overflow-hidden">
            {/* Red accent top line */}
            <div className="h-1 bg-gradient-to-r from-brand-red via-red-500 to-brand-red/60" />

            {/* Decorative pattern */}
            <div className="absolute inset-0 pattern-grid opacity-30" />

            {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Main Footer */}
                <div className="grid gap-10 py-16 md:grid-cols-3">
                    {/* Info Fakultas */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                                <Scale className="h-6 w-6 text-brand-gold" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">{siteConfig.name}</p>
                                <p className="text-xs text-white/60">{siteConfig.university}</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                            {siteConfig.description}
                        </p>
                        {/* Social Media */}
                        <div className="flex items-center gap-2 pt-1">
                            {[
                                { icon: Instagram, href: siteConfig.socialMedia.instagram, label: "Instagram" },
                                { icon: Facebook, href: siteConfig.socialMedia.facebook, label: "Facebook" },
                                { icon: Youtube, href: siteConfig.socialMedia.youtube, label: "YouTube" },
                            ].map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-brand-red/20 hover:border-brand-red/30 transition-all duration-300"
                                    aria-label={label}
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Navigasi</h3>
                        <nav className="flex flex-col gap-1.5">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors py-1"
                                >
                                    <span className="h-1 w-1 rounded-full bg-brand-red/60 group-hover:bg-brand-red transition-colors" />
                                    {link.label}
                                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-5">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">Kontak</h3>
                        <div className="space-y-4">
                            {[
                                { icon: MapPin, text: siteConfig.address },
                                { icon: Phone, text: siteConfig.phone },
                                { icon: Mail, text: siteConfig.email },
                            ].map(({ icon: Icon, text }, i) => (
                                <div key={i} className="flex items-start gap-3 text-sm text-white/60">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 border border-white/10 mt-0.5">
                                        <Icon className="h-3.5 w-3.5" />
                                    </div>
                                    <span className="leading-relaxed">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-white/40">
                        &copy; {new Date().getFullYear()} {siteConfig.name} {siteConfig.university}. All rights reserved.
                    </p>
                    <p className="text-xs text-white/30">
                        Membangun masa depan hukum Indonesia 🇮🇩
                    </p>
                </div>
            </div>
        </footer>
    );
}
