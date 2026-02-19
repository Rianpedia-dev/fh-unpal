import Link from "next/link";
import { createGaleri } from "../../actions/galeri";
import { ArrowLeft } from "lucide-react";

export default function TambahGaleriPage() {
    return (
        <div>
            <Link href="/admin/galeri" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors"><ArrowLeft className="h-4 w-4" /> Kembali</Link>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Tambah Galeri</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <form action={createGaleri} className="space-y-5">
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Judul</label><input type="text" name="title" required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div className="grid grid-cols-2 gap-4">
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Kategori</label><select name="category" required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20"><option value="Akademik">Akademik</option><option value="Kemahasiswaan">Kemahasiswaan</option><option value="Seremonial">Seremonial</option></select></div>
                        <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Tanggal</label><input type="text" name="date" required placeholder="Februari 2026" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Upload Gambar</label>
                            <input type="file" name="image" accept="image/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 transition-all" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Atau URL Gambar</label>
                            <input type="text" name="imageUrl" placeholder="/images/gallery/foto.jpg" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">Simpan</button>
                        <Link href="/admin/galeri" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Batal</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
