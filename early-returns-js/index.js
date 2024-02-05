export function processOrder(order) {
    
    if (!order.isPaid) return 'Order is not paid.';
    if (order.isShipped) return 'Order is already shipped.';
    if (order.isCancelled) return 'Order is cancelled.';
    return 'Order is paid but not shipped.';
}
