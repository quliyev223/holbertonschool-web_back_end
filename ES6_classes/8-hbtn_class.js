// Export the HolbertonClass as default export
export default class HolbertonClass {
  // Constructor receives size (Number) and location (String)
  constructor(size, location) {
    // Store size in underscore attribute version
    this._size = size;
    // Store location in underscore attribute version
    this._location = location;
  }

  // This method is called when the object is cast to a Number
  // Example: Number(hc) or hc + 10
  valueOf() {
    return this._size;
  }

  // This method is called when the object is cast to a String
  // Example: String(hc) or "Location: " + hc
  toString() {
    return this._location;
  }
}
