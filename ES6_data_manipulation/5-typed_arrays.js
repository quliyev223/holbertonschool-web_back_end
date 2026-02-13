/**
 * Creates an ArrayBuffer with a specific Int8 value at a given position.
 * * @param {number} length - The total size of the buffer in bytes.
 * @param {number} position - The index where the value should be placed.
 * @param {number} value - The Int8 integer to store.
 * @returns {DataView} - A view of the buffer for data manipulation.
 * @throws {Error} - If the position is out of the buffer bounds.
 */
export default function createInt8TypedArray(length, position, value) {
  // 1. Initialize a new buffer of the specified byte length
  const buffer = new ArrayBuffer(length);

  if (position >= length || position < 0) {
    throw new Error('Position outside range');
  }
  // 3. Create a DataView to provide a low-level interface for reading/writing the buffer
  const view = new DataView(buffer);

  // 4. Set the 8-bit signed integer (Int8) at the specific byte offset
  view.setInt8(position, value);

  // 5. Return the DataView as requested
  return view;
}
