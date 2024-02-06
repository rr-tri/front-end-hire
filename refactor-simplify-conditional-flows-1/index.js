export const calculateShippingCost = (weight, destination) => {
    const rates = {
        USA: {
            5: 10,
            10: 15,
            Infinity: 20
        },
        CANADA: {
            5: 12,
            10: 18,
            Infinity: 25
        },
        other: {
            5: 15,
            10: 20,
            Infinity: 30
        },
    };
    const destinationRate = rates[destination] || rates.other;
    const cost = Object.entries(destinationRate).find(([maxWeight]) => weight <= parseFloat(maxWeight)) || [Infinity, 0];
    return cost[1];
};
