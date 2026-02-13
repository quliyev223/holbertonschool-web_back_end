/**
 * Creates a Set from an array.
 * @param {Array} array - The array of any kind of elements.
 * @returns {Set} A new Set containing the unique elements from the array.
 */
export default function setFromArray(array) {
  // The Set constructor automatically removes duplicate values 
  // from the provided iterable (array).
  return new Set(array);
}
