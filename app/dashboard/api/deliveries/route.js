import { NextResponse } from 'next/server';
import { getDeliveries, updateDeliveryStatus } from '@/lib/data';
export async function GET() {
    const deliveries = await getDeliveries();
    return NextResponse.json(deliveries);
}
export async function POST(request) {
    const { id, status } = await request.json();
    if (!id || !status) {
        return new NextResponse(JSON.stringify({
            error: 'Missing id or status'
        }), { status: 400 });
    }
    const updatedDelivery = await updateDeliveryStatus(id, status);
    if (!updatedDelivery) {
        return new NextResponse(JSON.stringify({ error: 'Delivery not found' }),
            { status: 404 });
    }
    return NextResponse.json(updatedDelivery);
}
