/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCostForDay = 40;

  if (days >= 7) {
    return baseCostForDay * days - 50;
  } else if (days >= 3 && days <= 6) {
    return baseCostForDay * days - 20;
  } else if (days <= 2) {
    return baseCostForDay * days;
  }
  // write code here
}

module.exports = calculateRentalCost;
