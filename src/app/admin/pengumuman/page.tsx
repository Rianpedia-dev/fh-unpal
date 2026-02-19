import Link from "next/link";
import { getAnnouncements } from "@/db/queries";
import { deletePengumuman } from "../actions/pengumuman";
import { DeleteButton } from "../components/delete-button";
import { Plus, Pencil, Megaphone } from "lucide-react";

export default async function PengumumanPage() {
    const items = await getAnnouncements();

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Pengumuman & Berita</h1>
                    <p className="text-slate-500 text-sm mt-1">{items.length} pengumuman</p>
                </div>
                <Link
                    href="/admin/pengumuman/tambah"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all"
                >
                    <Plus className="h-4 w-4" /> Tambah
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50">
                                <th className="text-left py-3 px-4 font-semibold text-slate-600">Judul</th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-600">Kategori</th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-600">Tanggal</th>
                                <th className="text-right py-3 px-4 font-semibold text-slate-600">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
                                                <Megaphone className="h-4 w-4" />
                                            </div>
                                            <span className="font-medium text-slate-900 line-clamp-1">{item.title}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-medium ${item.category === "Pengumuman"
                                            ? "bg-red-50 text-red-600"
                                            : "bg-blue-50 text-blue-600"
                                            }`}>
                                            {item.category}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4 text-slate-500">{item.date}</td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link
                                                href={`/admin/pengumuman/${item.id}/edit`}
                                                className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                            <DeleteButton action={deletePengumuman} id={item.id} label="Hapus pengumuman ini?" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {items.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                        <Megaphone className="h-10 w-10 mx-auto mb-3 opacity-30" />
                        <p>Belum ada pengumuman</p>
                    </div>
                )}
            </div>
        </div>
    );
}
