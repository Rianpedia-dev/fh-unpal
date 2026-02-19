"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/lib/auth";
import {
    Scale,
    LayoutDashboard,
    Megaphone,
    GraduationCap,
    Camera,
    FileText,
    BookOpen,
    Settings,
    LogOut,
    Menu,
    X,
    Image as ImageIcon,
} from "lucide-react";
import { useState } from "react";

const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Banner Hero", href: "/admin/hero", icon: ImageIcon },
    { label: "Pengumuman", href: "/admin/pengumuman", icon: Megaphone },
    { label: "Dosen", href: "/admin/dosen", icon: GraduationCap },
    { label: "Galeri", href: "/admin/galeri", icon: Camera },
    { label: "Info PMB", href: "/admin/pmb", icon: FileText },
    { label: "Profil", href: "/admin/profil", icon: BookOpen },
    { label: "Pengaturan", href: "/admin/pengaturan", icon: Settings },
];

export function AdminSidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === "/admin") return pathname === "/admin";
        return pathname.startsWith(href);
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="p-6 border-b border-white/10">
                <Link href="/admin" className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/25">
                        <Scale className="h-5 w-5 text-white" />
                    </div>
                    <div>
                        <p className="font-bold text-white text-sm">Admin Panel</p>
                        <p className="text-white/40 text-xs">FH UNPAL</p>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${isActive(item.href)
                            ? "bg-white/10 text-white shadow-sm"
                            : "text-white/50 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        <item.icon className="h-4 w-4 shrink-0" />
                        {item.label}
                    </Link>
                ))}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-white/10">
                <form action={logout}>
                    <button
                        type="submit"
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 w-full"
                    >
                        <LogOut className="h-4 w-4" />
                        Keluar
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-gradient-to-b from-slate-900 to-slate-800 z-50">
                <SidebarContent />
            </aside>

            {/* Mobile Header */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-slate-900 border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <Link href="/admin" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                        <Scale className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-white text-sm">Admin Panel</span>
                </Link>
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                >
                    {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            {mobileOpen && (
                <>
                    <div
                        className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
                        onClick={() => setMobileOpen(false)}
                    />
                    <aside className="lg:hidden fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-slate-900 to-slate-800 z-50">
                        <SidebarContent />
                    </aside>
                </>
            )}

            {/* Mobile top spacing */}
            <div className="lg:hidden h-14" />
        </>
    );
}
