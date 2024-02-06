export const processSalesData = (salesData) => {
    
    // Calculate total sales
    let totalSales = 0;
    for (let i = 0; i < salesData.length; i++) {
        if (salesData[i].amount > 0) {
            totalSales += salesData[i].amount;
        }
    }
  
    return totalSales;
  };
  