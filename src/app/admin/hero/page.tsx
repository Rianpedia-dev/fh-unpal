import Link from "next/link";
import { getHeroSlides } from "@/db/queries";
import { Button } from "@/components/ui/button";
import { Plus, Pencil, Trash2, ImageIcon } from "lucide-react";
import Image from "next/image";
import { deleteHeroSlide } from "../actions/hero";
import { DeleteButton } from "../components/delete-button";

export default async function AdminHeroPage() {
    const slides = await getHeroSlides();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">Banner Hero Beranda</h1>
                    <p className="text-muted-foreground">Kelola slider banner utama di halaman beranda.</p>
                </div>
                <Button asChild>
                    <Link href="/admin/hero/tambah">
                        <Plus className="mr-2 h-4 w-4" />
                        Tambah Slide
                    </Link>
                </Button>
            </div>

            <div className="grid gap-6">
                {slides.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl border border-dashed text-center">
                        <div className="h-12 w-12 rounded-full bg-slate-50 flex items-center justify-center mb-4">
                            <ImageIcon className="h-6 w-6 text-slate-300" />
                        </div>
                        <h3 className="font-medium text-slate-900">Belum ada slide</h3>
                        <p className="text-sm text-slate-500 mt-1">Tambahkan slide pertama untuk banner beranda.</p>
                    </div>
                ) : (
                    slides.map((slide) => (
                        <div key={slide.id} className="bg-white rounded-xl border p-4 flex gap-6 items-center">
                            <div className="relative h-24 w-40 rounded-lg overflow-hidden border bg-slate-50 shrink-0">
                                {slide.imageUrl ? (
                                    <Image
                                        src={slide.imageUrl}
                                        alt={slide.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="flex h-full w-full items-center justify-center">
                                        <ImageIcon className="h-8 w-8 text-slate-200" />
                                    </div>
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-brand-navy bg-brand-navy/5 px-2 py-0.5 rounded uppercase tracking-wider">
                                        Urutan: {slide.order}
                                    </span>
                                    <h2 className="font-bold text-slate-900 truncate">{slide.title}</h2>
                                </div>
                                <p className="text-sm text-slate-500 truncate">{slide.subtitle}</p>
                                <p className="text-xs text-slate-400 mt-1 italic">Link: {slide.buttonLink}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" asChild>
                                    <Link href={`/admin/hero/${slide.id}/edit`}>
                                        <Pencil className="h-4 w-4" />
                                    </Link>
                                </Button>
                                <DeleteButton action={deleteHeroSlide} id={slide.id} label="Apakah Anda yakin ingin menghapus slide ini?" />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
