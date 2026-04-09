import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getDeliveries } from "@/lib/data";
export async function RecentDeliveries({ className }) {
  const deliveries = await getDeliveries();
  const recentDeliveries = deliveries
    .sort(
      (a, b) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime(),
    )
    .slice(0, 5);
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Recent Deliveries</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {recentDeliveries.map((delivery) => (
          <div className="flex items-center gap-4" key={delivery.id}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>
                {delivery.customerName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">
                {delivery.customerName}
              </p>
              <p className="text-sm text-muted-foreground">
                {delivery.customerAddress}
              </p>
            </div>
            <div className="ml-auto fontmedium">
              +${delivery.revenue.toFixed(2)}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
