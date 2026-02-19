import { getDashboardCounts } from "@/db/queries";
import { Megaphone, GraduationCap, Briefcase, UsersRound, Camera } from "lucide-react";

export default function AdminDashboard() {
    const counts = getDashboardCounts();

    const stats = [
        { label: "Pengumuman", count: counts.announcements, icon: Megaphone, color: "from-red-500 to-red-600", shadow: "shadow-red-500/20" },
        { label: "Dosen", count: counts.lecturers, icon: GraduationCap, color: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/20" },
        { label: "Staff", count: counts.staff, icon: Briefcase, color: "from-emerald-500 to-emerald-600", shadow: "shadow-emerald-500/20" },
        { label: "Organisasi", count: counts.organizations, icon: UsersRound, color: "from-amber-500 to-amber-600", shadow: "shadow-amber-500/20" },
        { label: "Galeri", count: counts.gallery, icon: Camera, color: "from-purple-500 to-purple-600", shadow: "shadow-purple-500/20" },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                <p className="text-slate-500 text-sm mt-1">Selamat datang di Admin Panel Fakultas Hukum UNPAL</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                            <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} ${stat.shadow} shadow-lg`}>
                                <stat.icon className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-sm font-medium text-slate-500">{stat.label}</span>
                        </div>
                        <p className="text-3xl font-bold text-slate-900">{stat.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
