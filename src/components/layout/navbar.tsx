"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { type SiteConfig } from "@/db/queries";

export default function Navbar({ siteConfig }: { siteConfig: SiteConfig }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Thin Red Accent Top Line */}
            <div className="h-1 bg-gradient-to-r from-brand-red via-brand-red/80 to-brand-navy" />

            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-border/50 shadow-sm">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-light text-white shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                            <Scale className="h-5 w-5" />
                            {/* Red corner accent */}
                            <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-brand-red border-2 border-white" />
                        </div>
                        <div className="hidden sm:block">
                            <p className="text-sm font-bold leading-tight tracking-tight text-brand-navy">
                                {siteConfig.name}
                            </p>
                            <p className="text-[11px] text-muted-foreground font-medium">
                                {siteConfig.university}
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                                    pathname === link.href
                                        ? "text-brand-navy bg-brand-navy/5"
                                        : "text-muted-foreground hover:text-brand-navy hover:bg-slate-50"
                                )}
                            >
                                {link.label}
                                {pathname === link.href && (
                                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-gradient-to-r from-brand-red to-brand-red/60 rounded-full" />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="text-brand-navy">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Buka menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] pt-10 bg-white">
                            <SheetTitle className="flex items-center gap-3 px-2 mb-8">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-navy to-brand-navy-light text-white">
                                    <Scale className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-brand-navy">{siteConfig.shortName}</p>
                                    <p className="text-xs text-muted-foreground">Menu Navigasi</p>
                                </div>
                            </SheetTitle>
                            <nav className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={cn(
                                            "flex items-center rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                                            pathname === link.href
                                                ? "bg-brand-navy/5 text-brand-navy border-l-3 border-brand-red"
                                                : "text-muted-foreground hover:bg-slate-50 hover:text-brand-navy"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </header>
        </>
    );
}
