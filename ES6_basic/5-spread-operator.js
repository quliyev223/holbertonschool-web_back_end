/*
 * Concatenates two arrays and a string into a single array using spread syntax.
 */
export default function concatArrays(array1, array2, string) {
  return [...array1, ...array2, ...string];
}
