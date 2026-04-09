import { StatCards } from "@/components/dashboard/stat-cards";
import { Overview } from "@/components/dashboard/overview";
import { RecentDeliveries } from "@/components/dashboard/recent-deliveries";
import { getDeliveries } from "@/lib/data";
export const metadata = {
  title: "Delivery Dashboard",
  description: "Overview of delivery operations.",
};
export default async function DashboardPage() {
  const deliveries = await getDeliveries();
  const totalDeliveries = deliveries.length;
  const pendingDeliveries = deliveries.filter(
    (d) => d.status === "pending" || d.status === "in-transit",
  ).length;
  const completedDeliveries = deliveries.filter(
    (d) => d.status === "delivered",
  ).length;
  const totalRevenue = deliveries.reduce((sum, d) => sum + d.revenue, 0);
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <StatCards
        totalDeliveries={totalDeliveries}
        pendingDeliveries={pendingDeliveries}
        completedDeliveries={completedDeliveries}
        totalRevenue={totalRevenue}
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Overview className="col-span-4" />
        <RecentDeliveries className="col-span-3" />
      </div>
    </div>
  );
}
