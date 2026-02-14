/**
 * Processes a set and returns a string of values starting with startString.
 * @param {Set} set - The set of strings.
 * @param {string} startString - The prefix to filter and remove.
 * @returns {string} - The joined results.
 */
export default function cleanSet(set, startString) {
  // Guard clause for empty or non-string startString
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  return [...set]
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}
