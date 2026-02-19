"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import crypto from "crypto";

const AUTH_COOKIE = "admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24; // 24 hours

function hashPassword(password: string): string {
    return crypto.createHash("sha256").update(password).digest("hex");
}

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        return { error: "Konfigurasi admin belum diset." };
    }

    if (email !== adminEmail || password !== adminPassword) {
        return { error: "Email atau password salah." };
    }

    // Create session token
    const token = hashPassword(`${email}:${Date.now()}:${process.env.AUTH_SECRET}`);

    const cookieStore = await cookies();
    cookieStore.set(AUTH_COOKIE, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: SESSION_MAX_AGE,
        path: "/",
    });

    redirect("/admin");
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete(AUTH_COOKIE);
    redirect("/admin/login");
}

export async function getSession() {
    const cookieStore = await cookies();
    const session = cookieStore.get(AUTH_COOKIE);
    return session?.value ?? null;
}

export async function requireAuth() {
    const session = await getSession();
    if (!session) {
        redirect("/admin/login");
    }
    return session;
}
