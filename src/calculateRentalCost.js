/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const baseCostForDay = 40;
  const sevenDays = 7;
  const discountForThree = 20;
  const discountForSeven = 50;

  const two = 2;

  if (days >= sevenDays) {
    return baseCostForDay * days - discountForSeven;
  }

  if (days > two && days < sevenDays) {
    return baseCostForDay * days - discountForThree;
  }

  if (days <= two) {
    return baseCostForDay * days;
  }
  // write code here
}

module.exports = calculateRentalCost;
