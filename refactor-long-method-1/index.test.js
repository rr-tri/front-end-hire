import { processSalesData } from "./index";

// WRITE ALL TESTS BEFORE YOU START REFACTORING
describe("Process Sales Data", () => {
    test('The function correctly calculates the total sales for valid sales records', () => { 
        
        const mock_data = [{amount:1000},{amount:343343},{amount:3434343}];
        expect(processSalesData(mock_data)).toBe(3778686);
     });

     test('The function ignores sales records with negative amounts.', () => { 
        const mock_data = [{amount:1000},{amount:-343343},{amount:3434343}];
        expect(processSalesData(mock_data)).toBe(3435343);

      });

      test('The function handles an empty array without errors.', () => { 
        expect(processSalesData([])).toBe(0);

       });
});
