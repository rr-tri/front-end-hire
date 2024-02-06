import { calculateShippingCost } from "./index";

describe("Calculate Shipping Cost", () => {
  
    
  describe('The function returns the correct shipping cost for various weights and destinations.', () => { 
   
    test('400kg For USA', () => { 
        expect(calculateShippingCost(400,"USA"))
        .toBe(20);
     })
     test('400kg For Canada', () => { 
        expect(calculateShippingCost(400,"Canada"))
        .toBe(25);
     })
   
   })
   describe('The function handles unexpected destinations by applying a default cost structure.', () => { 
    test('400kg For India', () => { 
        expect(calculateShippingCost(400,"India"))
        .toBe(30);
     });
     test('400kg For Australia', () => { 
        expect(calculateShippingCost(400,"Australia"))
        .toBe(30);
     });
     test('400kg For New Zealand', () => { 
        expect(calculateShippingCost(400,"New Zealand"))
        .toBe(30);
     });
    })
});
