"use client";

import { Trash2 } from "lucide-react";

export function DeleteButton({
    action,
    id,
    label = "Hapus item ini?",
}: {
    action: (formData: FormData) => void;
    id: number;
    label?: string;
}) {
    return (
        <form action={action}>
            <input type="hidden" name="id" value={id} />
            <button
                type="submit"
                className="p-2 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                onClick={(e) => {
                    if (!confirm(label)) e.preventDefault();
                }}
            >
                <Trash2 className="h-4 w-4" />
            </button>
        </form>
    );
}
