export const calculateShippingCost = (weight, destination) => {
    let cost;
    if (destination === 'USA') {
      if (weight <= 5) {
        cost = 10;
      } else if (weight > 5 && weight <= 10) {
        cost = 15;
      } else {
        cost = 20;
      }
    } else if (destination === 'Canada') {
      if (weight <= 5) {
        cost = 12;
      } else if (weight > 5 && weight <= 10) {
        cost = 18;
      } else {
        cost = 25;
      }
    } else {
      if (weight <= 5) {
        cost = 15;
      } else if (weight > 5 && weight <= 10) {
        cost = 20;
      } else {
        cost = 30;
      }
    }
    return cost;
  };
  