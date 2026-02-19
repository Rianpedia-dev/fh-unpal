import { getFullProfile } from "@/db/queries";
import { updateProfil } from "../actions/profil";
import { BookOpen, Save } from "lucide-react";

export default function ProfilAdminPage() {
    const data = getFullProfile();

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-900">Profil Fakultas</h1>
                <p className="text-slate-500 text-sm mt-1">Kelola informasi profil fakultas</p>
            </div>

            <form action={updateProfil} className="space-y-6">
                {/* Sejarah */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="h-5 w-5 text-red-500" />
                        <h2 className="text-lg font-semibold text-slate-900">Sejarah</h2>
                    </div>
                    <textarea name="sejarah" rows={6} defaultValue={data.sejarah} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                </div>

                {/* Visi & Misi */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Visi & Misi</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Visi</label>
                            <textarea name="visi" rows={3} defaultValue={data.visi} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Misi (satu per baris)</label>
                            <textarea name="misi" rows={6} defaultValue={data.misi.join("\n")} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                            <p className="text-xs text-slate-400 mt-1">Pisahkan setiap misi dengan baris baru (Enter)</p>
                        </div>
                    </div>
                </div>

                {/* Akreditasi */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Akreditasi</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Grade</label>
                            <input type="text" name="akreditasi_grade" defaultValue={data.akreditasi.grade} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">SK</label>
                            <input type="text" name="akreditasi_sk" defaultValue={data.akreditasi.sk} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Berlaku Sampai</label>
                            <input type="text" name="akreditasi_validUntil" defaultValue={data.akreditasi.validUntil} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Deskripsi Akreditasi</label>
                        <textarea name="akreditasi_description" rows={3} defaultValue={data.akreditasi.description} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>
                </div>

                {/* Struktur Organisasi */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-lg font-semibold text-slate-900 mb-4">Struktur Organisasi</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Dekan</label><input type="text" name="struktur_dekan" defaultValue={data.strukturOrganisasi.dekan} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Wakil Dekan I</label><input type="text" name="struktur_wakil1" defaultValue={data.strukturOrganisasi.wakil1} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Wakil Dekan II</label><input type="text" name="struktur_wakil2" defaultValue={data.strukturOrganisasi.wakil2} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Ka. Prodi</label><input type="text" name="struktur_kaprodi" defaultValue={data.strukturOrganisasi.kaprodi} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Sekretaris Prodi</label><input type="text" name="struktur_sekretarisProdi" defaultValue={data.strukturOrganisasi.sekretarisProdi} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Katu Tata Usaha</label><input type="text" name="struktur_katuTataUsaha" defaultValue={data.strukturOrganisasi.katuTataUsaha} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                </div>

                <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">
                    <Save className="h-4 w-4" /> Simpan Semua Perubahan
                </button>
            </form>
        </div>
    );
}
