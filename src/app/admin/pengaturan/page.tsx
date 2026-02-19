import { getFullSiteConfig } from "@/db/queries";
import { updateSiteConfig } from "../actions/profil";
import { Settings, Save } from "lucide-react";

export default function PengaturanPage() {
    const data = getFullSiteConfig();

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Pengaturan Situs</h1>
                <p className="text-slate-500 text-sm mt-1">Konfigurasi informasi umum website</p>
            </div>

            <form action={updateSiteConfig} className="space-y-6">
                {/* Identitas */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Settings className="h-5 w-5 text-red-500" />
                        <h2 className="text-lg font-semibold text-slate-900">Identitas</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Fakultas</label><input type="text" name="name" defaultValue={data.name} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Universitas</label><input type="text" name="university" defaultValue={data.university} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Nama Singkat</label><input type="text" name="shortName" defaultValue={data.shortName} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Deskripsi</label>
                        <textarea name="description" rows={3} defaultValue={data.description} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>
                </div>

                {/* Kontak */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Kontak</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="sm:col-span-2"><label className="block text-sm font-medium text-slate-700 mb-1.5">Alamat</label><input type="text" name="address" defaultValue={data.address} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Telepon</label><input type="text" name="phone" defaultValue={data.phone} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label><input type="email" name="email" defaultValue={data.email} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Media Sosial</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Instagram</label><input type="text" name="instagram" defaultValue={data.socialMedia.instagram} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Facebook</label><input type="text" name="facebook" defaultValue={data.socialMedia.facebook} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">YouTube</label><input type="text" name="youtube" defaultValue={data.socialMedia.youtube} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                </div>

                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">
                    <Save className="h-4 w-4" /> Simpan Pengaturan
                </button>
            </form>
        </div>
    );
}
