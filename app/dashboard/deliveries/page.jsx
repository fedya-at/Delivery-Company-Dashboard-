import { DataTable } from "@/components/deliveries/data-table";
import { columns } from "./columns";
import { getDeliveries } from "@/lib/data";
export const metadata = {
  title: "Manage Deliveries",
  description: "View and manage all delivery operations.",
};
export default async function DeliveriesPage() {
  const deliveries = await getDeliveries();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Deliveries</h2>
      </div>
      <DataTable columns={columns} data={deliveries} />
    </div>
  );
}
