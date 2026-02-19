import Link from "next/link";
import { getPmbTimeline, getTuitionFees } from "@/db/queries";
import { deleteTimeline, deleteFee } from "../actions/pmb";
import { DeleteButton } from "../components/delete-button";
import { Plus, Pencil, FileText, Wallet } from "lucide-react";

export default function PmbPage() {
    const timeline = getPmbTimeline();
    const fees = getTuitionFees();

    return (
        <div className="space-y-8">
            {/* Timeline Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div><h1 className="text-2xl font-bold text-slate-900">Info PMB</h1><p className="text-slate-500 text-sm mt-1">{timeline.length} tahapan</p></div>
                    <Link href="/admin/pmb/tambah-timeline" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold shadow-lg shadow-red-500/25 hover:from-red-600 hover:to-red-700 transition-all"><Plus className="h-4 w-4" /> Tambah Tahapan</Link>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead><tr className="border-b border-slate-100 bg-slate-50"><th className="text-left py-3 px-4 font-semibold text-slate-600">Langkah</th><th className="text-left py-3 px-4 font-semibold text-slate-600">Judul</th><th className="text-left py-3 px-4 font-semibold text-slate-600">Periode</th><th className="text-right py-3 px-4 font-semibold text-slate-600">Aksi</th></tr></thead>
                            <tbody>
                                {timeline.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-3 px-4"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-600 font-bold text-sm">{item.step}</div></td>
                                        <td className="py-3 px-4"><div className="flex items-center gap-3"><FileText className="h-4 w-4 text-red-400" /><span className="font-medium text-slate-900">{item.title}</span></div></td>
                                        <td className="py-3 px-4 text-slate-500">{item.period}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link href={`/admin/pmb/${item.id}/edit-timeline`} className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Pencil className="h-4 w-4" /></Link>
                                                <DeleteButton action={deleteTimeline} id={item.id} label="Hapus tahapan ini?" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Tuition Fees Section */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div><h2 className="text-xl font-bold text-slate-900">Biaya Kuliah</h2><p className="text-slate-500 text-sm mt-1">{fees.length} komponen</p></div>
                    <Link href="/admin/pmb/tambah-biaya" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-emerald-700 transition-all"><Plus className="h-4 w-4" /> Tambah Biaya</Link>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead><tr className="border-b border-slate-100 bg-slate-50"><th className="text-left py-3 px-4 font-semibold text-slate-600">Komponen</th><th className="text-left py-3 px-4 font-semibold text-slate-600">Jumlah</th><th className="text-left py-3 px-4 font-semibold text-slate-600">Keterangan</th><th className="text-right py-3 px-4 font-semibold text-slate-600">Aksi</th></tr></thead>
                            <tbody>
                                {fees.map((item) => (
                                    <tr key={item.id} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-3 px-4"><div className="flex items-center gap-3"><Wallet className="h-4 w-4 text-emerald-500" /><span className="font-medium text-slate-900">{item.component}</span></div></td>
                                        <td className="py-3 px-4 font-semibold text-slate-900">{item.amount}</td>
                                        <td className="py-3 px-4 text-slate-500">{item.note}</td>
                                        <td className="py-3 px-4">
                                            <div className="flex items-center justify-end gap-1">
                                                <Link href={`/admin/pmb/${item.id}/edit-biaya`} className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors"><Pencil className="h-4 w-4" /></Link>
                                                <DeleteButton action={deleteFee} id={item.id} label="Hapus biaya ini?" />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
