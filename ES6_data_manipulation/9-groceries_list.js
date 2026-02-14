/**
 * Returns a Map of groceries with specific items and quantities.
 * @returns {Map<string, number>} - A map containing grocery items.
 */
export default function groceriesList() {
  // We initialize the Map by passing an array of [key, value] pairs.
  // This is a concise way to create a pre-filled Map.
  return new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);
}
