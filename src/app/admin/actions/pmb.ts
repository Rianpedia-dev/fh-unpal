"use server";

import { db } from "@/db/index";
import * as schema from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTimeline(formData: FormData) {
    await db.insert(schema.pmbTimeline)
        .values({
            step: Number(formData.get("step")),
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            period: formData.get("period") as string,
        });

    revalidatePath("/admin/pmb");
    revalidatePath("/pmb");
    redirect("/admin/pmb");
}

export async function updateTimeline(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.update(schema.pmbTimeline)
        .set({
            step: Number(formData.get("step")),
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            period: formData.get("period") as string,
        })
        .where(eq(schema.pmbTimeline.id, id));

    revalidatePath("/admin/pmb");
    revalidatePath("/pmb");
    redirect("/admin/pmb");
}

export async function deleteTimeline(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.delete(schema.pmbTimeline).where(eq(schema.pmbTimeline.id, id));

    revalidatePath("/admin/pmb");
    revalidatePath("/pmb");
}

export async function createFee(formData: FormData) {
    await db.insert(schema.tuitionFees)
        .values({
            component: formData.get("component") as string,
            amount: formData.get("amount") as string,
            note: formData.get("note") as string,
        });

    revalidatePath("/admin/pmb");
    revalidatePath("/pmb");
    redirect("/admin/pmb");
}

export async function updateFee(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.update(schema.tuitionFees)
        .set({
            component: formData.get("component") as string,
            amount: formData.get("amount") as string,
            note: formData.get("note") as string,
        })
        .where(eq(schema.tuitionFees.id, id));

    revalidatePath("/admin/pmb");
    revalidatePath("/pmb");
    redirect("/admin/pmb");
}

export async function deleteFee(formData: FormData) {
    const id = Number(formData.get("id"));
    await db.delete(schema.tuitionFees).where(eq(schema.tuitionFees.id, id));

    revalidatePath("/admin/pmb");
    revalidatePath("/pmb");
}
