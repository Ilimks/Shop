export const PercentCard = (oldPrice: number, price: number): number | null => {
    if (!oldPrice || oldPrice <= price) return null; 
    return Math.round(((oldPrice - price) / oldPrice) * 100);
  }; объясни мне этот код