import Link from "next/link";
import { notFound } from "next/navigation";
import { getAnnouncementById } from "@/db/queries";
import { updatePengumuman } from "../../../actions/pengumuman";
import { ArrowLeft } from "lucide-react";

export default async function EditPengumumanPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = getAnnouncementById(Number(id));
    if (!item) notFound();

    return (
        <div>
            <Link href="/admin/pengumuman" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4" /> Kembali
            </Link>

            <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Pengumuman</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <form action={updatePengumuman} className="space-y-5">
                    <input type="hidden" name="id" value={item.id} />
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Judul</label>
                        <input type="text" name="title" required defaultValue={item.title} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Ringkasan</label>
                        <textarea name="excerpt" required rows={3} defaultValue={item.excerpt} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Konten</label>
                        <textarea name="content" rows={6} defaultValue={item.content ?? ""} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Tanggal</label>
                            <input type="text" name="date" required defaultValue={item.date} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Kategori</label>
                            <select name="category" required defaultValue={item.category} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20">
                                <option value="Pengumuman">Pengumuman</option>
                                <option value="Berita">Berita</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">
                            Simpan Perubahan
                        </button>
                        <Link href="/admin/pengumuman" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                            Batal
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
