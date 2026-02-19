import { getGallery } from "@/db/queries";
import GalleryContent from "./gallery-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galeri",
    description: "Dokumentasi berbagai kegiatan dan momen penting Fakultas Hukum Universitas Palembang.",
};

export default async function GaleriPage() {
    const items = await getGallery();

    return <GalleryContent items={items} />;
}
