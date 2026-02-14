/**
 * Checks if all elements in an array exist within a set.
 * @param {Set} set - The set to check against.
 * @param {Array} array - The array containing elements to verify.
 * @returns {boolean} - True if all array elements are in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  // The .every() method tests whether all elements in the array 
  // pass the test implemented by the provided function.
  // It returns true if the callback function returns a truthy value 
  // for every array element; otherwise, false.
  return array.every((value) => set.has(value));
}
