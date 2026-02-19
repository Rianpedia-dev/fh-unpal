import { cookies } from "next/headers";
import { AdminSidebar } from "./components/sidebar";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = await cookies();
    const session = cookieStore.get("admin_session");

    // Halaman login: tanpa sidebar
    if (!session) {
        return <>{children}</>;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <AdminSidebar />
            <main className="lg:pl-64">
                <div className="p-4 sm:p-6 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}

