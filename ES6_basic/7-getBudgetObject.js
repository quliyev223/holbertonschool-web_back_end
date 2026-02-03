/**
 * Returns an object representing a budget.
 * Uses ES6 Object Property Value Shorthand.
 */
export default function getBudgetObject(income, gdp, capita) {
  // In ES6, if the key name and the variable name are the same,
  // you can omit the colon and the duplicate name.
  const budget = {
    income, // Equivalent to income: income
    gdp,    
    capita,
  };

  return budget;
}
