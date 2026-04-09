/**
* @typedef {object} Delivery
* @property {string} id
* @property {string} customerName
* @property {string} customerAddress
* @property {string} driverName
* @property {DeliveryStatus} status
* @property {string} orderDate
* @property {string} deliveryDate
* @property {number} revenue
*/
export const deliveries = [{
    id: 'DEL001',
    customerName: 'Alice Smith',
    customerAddress: '123 Main St, Anytown USA',
    driverName: 'John Doe',
    status: 'delivered',
    orderDate: '2026-03-20',
    deliveryDate: '2026-03-21',
    revenue: 55.75,
},
{
    id: 'DEL002',
    customerName: 'Bob Johnson',
    customerAddress: '456 Oak Ave, Anytown USA',
    driverName: 'Jane Doe',
    status: 'in-transit',
    orderDate: '2026-03-21',
    deliveryDate: '2026-03-22',
    revenue: 30.00,
},
{
    id: 'DEL003',
    customerName: 'Charlie Brown',
    customerAddress: '789 Pine Ln, Anytown USA',
    driverName: 'John Doe',
    status: 'pending',
    orderDate: '2026-03-22',
    deliveryDate: '2026-03-23',
    revenue: 72.50,
},
{
    id: 'DEL004',
    customerName: 'Diana Prince',
    customerAddress: '101 Hero Rd, Anytown USA',
    driverName: 'Jane Doe',
    status: 'cancelled',
    orderDate: '2026-03-19',
    deliveryDate: '2026-03-20',
    revenue: 0.00,
},
{
    id: 'DEL005',
    customerName: 'Eve Adams',
    customerAddress: '202 Apple St, Anytown USA',
    driverName: 'Peter Jones',
    status: 'delivered',
    orderDate: '2026-03-18',
    deliveryDate: '2026-03-19',
    revenue: 120.00,
},
{
    id: 'DEL006',
    customerName: 'Frank White',
    customerAddress: '303 Forest Dr, Anytown USA',
    driverName: 'Peter Jones',
    status: 'in-transit',
    orderDate: '2026-03-23',
    deliveryDate: '2026-03-24',
    revenue: 45.20,
},
{
    id: 'DEL007',
    customerName: 'Grace Black',
    customerAddress: '404 River Rd, Anytown USA',
    driverName: 'John Doe',
    status: 'pending',
    orderDate: '2026-03-24',
    deliveryDate: '2026-03-25',
    revenue: 60.00,
}, {
    id: 'DEL008',
    customerName: 'Harry Green',
    customerAddress: '505 Hilltop, Anytown USA',
    driverName: 'Jane Doe',
    status: 'delivered',
    orderDate: '2026-03-17',
    deliveryDate: '2026-03-18',
    revenue: 90.00,
},
];

export const getDeliveries = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(deliveries);
        }, 500)
    })
}
export const getDeliveryById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(deliveries.find(delivery => delivery.id === id));
        }, 500);
    });
};
export const updateDeliveryStatus = (id, status) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const deliveryIndex = deliveries.findIndex(delivery => delivery.id ===
                id);
            if (deliveryIndex > -1) {
                deliveries[deliveryIndex].status = status;
                resolve(deliveries[deliveryIndex]);
            } else {
                resolve(undefined);
            }
        }, 500);
    });
};