/**
 * Represents a currency unit.
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   * @param {string} code - The symbol or code of the currency (e.g., '$').
   * @param {string} name - The full name of the currency (e.g., 'Dollars').
   */
  constructor(code, name) {
    // Calling setters to initialize underscore attributes with validation
    this.code = code;
    this.name = name;
  }

  // Getter and Setter for code
  get code() {
    return this._code;
  }

  set code(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = value;
  }

  // Getter and Setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Returns the full currency format: name (code).
   * @returns {string} The formatted string.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
