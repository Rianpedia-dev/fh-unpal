import Link from "next/link";
import { getLecturers } from "@/db/queries";
import { deleteDosen } from "../actions/dosen";
import { DeleteButton } from "../components/delete-button";
import { Plus, Pencil, GraduationCap } from "lucide-react";

export default function DosenPage() {
    const items = getLecturers();

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dosen</h1>
                    <p className="text-slate-500 text-sm mt-1">{items.length} dosen</p>
                </div>
                <Link href="/admin/dosen/tambah" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all">
                    <Plus className="h-4 w-4" /> Tambah
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-slate-100 bg-slate-50">
                                <th className="text-left py-3 px-4 font-semibold text-slate-600">Nama / Jabatan</th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-600">NIDN</th>
                                <th className="text-left py-3 px-4 font-semibold text-slate-600">Spesialisasi</th>
                                <th className="text-right py-3 px-4 font-semibold text-slate-600">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-500">
                                                <GraduationCap className="h-4 w-4" />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-slate-900">{item.name}</span>
                                                <span className="text-[10px] text-slate-400 font-semibold uppercase">{item.position}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-slate-500 font-mono tracking-tight">{item.nidn}</td>
                                    <td className="py-3 px-4">
                                        <span className="inline-flex px-2.5 py-1 rounded-lg text-xs font-medium bg-red-50 text-red-600">{item.specialization}</span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <div className="flex items-center justify-end gap-1">
                                            <Link href={`/admin/dosen/${item.id}/edit`} className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                                                <Pencil className="h-4 w-4" />
                                            </Link>
                                            <DeleteButton action={deleteDosen} id={item.id} label="Hapus dosen ini?" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {items.length === 0 && (
                    <div className="text-center py-12 text-slate-400">
                        <GraduationCap className="h-10 w-10 mx-auto mb-3 opacity-30" />
                        <p>Belum ada dosen</p>
                    </div>
                )}
            </div>
        </div>
    );
}
