import Link from "next/link";
import { notFound } from "next/navigation";
import { getTuitionFeeById } from "@/db/queries";
import { updateFee } from "../../../actions/pmb";
import { ArrowLeft } from "lucide-react";

export default async function EditBiayaPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const item = getTuitionFeeById(Number(id));
    if (!item) notFound();

    return (
        <div>
            <Link href="/admin/pmb" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 mb-6 transition-colors"><ArrowLeft className="h-4 w-4" /> Kembali</Link>
            <h1 className="text-2xl font-bold text-slate-900 mb-6">Edit Biaya Kuliah</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <form action={updateFee} className="space-y-5">
                    <input type="hidden" name="id" value={item.id} />
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Komponen</label><input type="text" name="component" required defaultValue={item.component} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Jumlah</label><input type="text" name="amount" required defaultValue={item.amount} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div><label className="block text-sm font-medium text-slate-700 mb-1.5">Keterangan</label><input type="text" name="note" required defaultValue={item.note} className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20" /></div>
                    <div className="flex gap-3 pt-2">
                        <button type="submit" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-semibold shadow-lg shadow-emerald-500/25 hover:from-emerald-600 hover:to-emerald-700 transition-all">Simpan Perubahan</button>
                        <Link href="/admin/pmb" className="px-6 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">Batal</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
