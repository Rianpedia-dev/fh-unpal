import Link from "next/link";
import { createTimeline } from "../../actions/pmb";
import { ArrowLeft } from "lucide-react";

export default function TambahTimelinePage() {
    return (
        <div>
            <Link href="/admin/pmb" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors"><ArrowLeft className="h-4 w-4" /> Kembali</Link>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Tambah Tahapan PMB</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <form action={createTimeline} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Langkah Ke-</label><input type="number" name="step" required min="1" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Periode</label><input type="text" name="period" required placeholder="Jan-Feb 2026" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Judul</label><input type="text" name="title" required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Deskripsi</label><textarea name="description" required rows={3} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">Simpan</button>
                        <Link href="/admin/pmb" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Batal</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
