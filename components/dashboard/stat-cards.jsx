import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CheckCircle, DollarSign } from "lucide-react";
export function StatCards({
  totalDeliveries,
  pendingDeliveries,
  completedDeliveries,
  totalRevenue,
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader
          className="flex flex-row items-center justify-between
space-y-0 pb-2"
        >
          <CardTitle className="text-sm font-medium">
            Total Deliveries
          </CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDeliveries}</div>
          <p className="text-xs text-muted-foreground">All time deliveries</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          className="flex flex-row items-center justify-between
space-y-0 pb-2"
        >
          <CardTitle className="text-sm font-medium">
            Pending Deliveries
          </CardTitle>
          <Truck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{pendingDeliveries}</div>
          <p className="text-xs text-muted-foreground">
            Currently awaiting pickup or in transit
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          className="flex flex-row items-center justify-between
space-y-0 pb-2"
        >
          <CardTitle className="text-sm font-medium">
            Completed Deliveries
          </CardTitle>
          <CheckCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{completedDeliveries}</div>
          <p className="text-xs text-muted-foreground">
            Successfully delivered
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          className="flex flex-row items-center justify-between
space-y-0 pb-2"
        >
          <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalRevenue.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            Revenue from all deliveries
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
