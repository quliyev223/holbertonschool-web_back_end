export default function getBudgetObject(income, gdp, capita) {
  // ES6 Property Shorthand: shorthand for income: income, etc.
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
