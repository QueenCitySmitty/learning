export class OrderDetail {
    getTotal(discount) {
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    }
    doSomething(input) {
        input.something();
        return input.result;
    }
}
//# sourceMappingURL=orderDetails.js.map