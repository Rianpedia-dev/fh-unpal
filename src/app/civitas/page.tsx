import { getLecturers } from "@/db/queries";
import CivitasContent from "./civitas-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Civitas Akademika",
    description: "Jajaran dosen Fakultas Hukum Universitas Palembang.",
};

export default async function CivitasPage() {
    const lecturers = await getLecturers();

    return (
        <CivitasContent
            lecturers={lecturers}
        />
    );
}
