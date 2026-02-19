import Link from "next/link";
import { notFound } from "next/navigation";
import { getPmbTimelineById } from "@/db/queries";
import { updateTimeline } from "../../../actions/pmb";
import { ArrowLeft } from "lucide-react";

export default async function EditTimelinePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = getPmbTimelineById(Number(id));
    if (!item) notFound();

    return (
        <div>
            <Link href="/admin/pmb" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors"><ArrowLeft className="h-4 w-4" /> Kembali</Link>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Tahapan PMB</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <form action={updateTimeline} className="space-y-5">
                    <input type="hidden" name="id" value={item.id} />
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Langkah Ke-</label><input type="number" name="step" required min="1" defaultValue={item.step} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Periode</label><input type="text" name="period" required defaultValue={item.period} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Judul</label><input type="text" name="title" required defaultValue={item.title} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Deskripsi</label><textarea name="description" required rows={3} defaultValue={item.description} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">Simpan Perubahan</button>
                        <Link href="/admin/pmb" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Batal</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
