import { processOrder } from "./index";

// WRITE ALL TESTS BEFORE YOU START REFACTORING
describe("Process Order", () => {
    test("Order is paid but not shipped", () => {
        expect(processOrder({ isPaid: true, isShipped: false })).toBe("Order is paid but not shipped.");
    });
    test("Order is not paid", () => {
        expect(processOrder({ isPaid: false })).toBe("Order is not paid.")
    })
    test("Order is shipped", () => {
        expect(processOrder({ isPaid:true,isShipped: true })).toBe("Order is already shipped.")

    })
    test("Order is cancelled", () => {
        expect(processOrder({ isPaid: true, isShipped: false, isCancelled: true })).toBe("Order is cancelled.")

    })

});
