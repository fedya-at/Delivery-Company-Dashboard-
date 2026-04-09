"use server";
import { updateDeliveryStatus } from '@/lib/data';
import { revalidatePath } from 'next/cache';
export async function updateStatusAction(id, status) {
    const updatedDelivery = await updateDeliveryStatus(id, status);
    if (!updatedDelivery) {
        return { error: 'Delivery not found' };
    }
    // Revalidate the path to show updated data immediately
    revalidatePath('/dashboard/deliveries');
    return { success: true, delivery: updatedDelivery };
}