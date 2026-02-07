// Import Currency class
import Currency from './3-currency.js';

class Pricing {
  /**
   * Create a Pricing object
   * @param {number} amount - Price amount
   * @param {Currency} currency - Currency instance
   */
  constructor(amount, currency) {
    // Use setters to apply validation on creation
    this.amount = amount;
    this.currency = currency;
  }

  /**
   * Get amount value
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set amount value
   * Ensures amount is a valid number
   */
  set amount(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('Amount must be a valid number');
    }
    this._amount = value;
  }

  /**
   * Get currency value
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set currency value
   * Ensures currency is an instance of Currency
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Display full price
   * Format: amount currency_name (currency_code)
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Convert price using conversion rate
   * @param {number} amount
   * @param {number} conversionRate
   * @returns {number}
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
