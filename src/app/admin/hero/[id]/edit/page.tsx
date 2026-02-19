import Link from "next/link";
import { notFound } from "next/navigation";
import { getHeroSlideById } from "@/db/queries";
import { updateHeroSlide } from "../../../actions/hero";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

export default function EditHeroPage({ params }: { params: { id: string } }) {
    const slide = getHeroSlideById(Number(params.id));

    if (!slide) {
        notFound();
    }

    return (
        <div>
            <Link href="/admin/hero" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors">
                <ChevronLeft className="h-4 w-4" /> Kembali
            </Link>

            <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Banner Hero</h1>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <form action={updateHeroSlide} className="space-y-5">
                    <input type="hidden" name="id" value={slide.id} />

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Garis Atas (Subtitle)</label>
                        <input type="text" name="subtitle" defaultValue={slide.subtitle || ""} placeholder="Contoh: Pendaftaran Mahasiswa Baru 2026 Dibuka" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Judul Utama</label>
                        <input type="text" name="title" defaultValue={slide.title} placeholder="Contoh: Fakultas Hukum" required className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Deskripsi Singkat</label>
                        <textarea name="description" defaultValue={slide.description || ""} placeholder="Mencetak Sarjana Hukum yang berintegritas..." rows={3} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Teks Tombol</label>
                            <input type="text" name="buttonText" defaultValue={slide.buttonText || ""} placeholder="Daftar Sekarang" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1.5">Link Tombol</label>
                            <input type="text" name="buttonLink" defaultValue={slide.buttonLink || ""} placeholder="/pmb" className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Gambar Utama</label>
                        {slide.imageUrl && (
                            <div className="relative h-32 w-full max-w-sm rounded-lg overflow-hidden border bg-slate-50 mb-3">
                                <Image src={slide.imageUrl} alt="Current hero" fill className="object-cover" />
                            </div>
                        )}
                        <input type="file" name="image" accept="image/*" className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100 transition-all" />
                        <p className="text-xs text-slate-400 mt-1">Pilih file baru jika ingin mengganti gambar. Rasio 16:9.</p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">Urutan Tampilan</label>
                        <input type="number" name="order" defaultValue={slide.order || 0} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">Simpan Perubahan</button>
                        <Link href="/admin/hero" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Batal</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
