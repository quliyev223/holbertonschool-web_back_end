export default class Building {
  /**
   * Constructor for the Building class
   * @param {Number} sqft - The square footage of the building
   */
  constructor(sqft) {
    // Check if the current instance is a subclass and if it has implemented the required method.
    // this.constructor refers to the class being instantiated.
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    // Store the attribute in an "underscore" version
    this._sqft = sqft;
  }

  /**
   * Getter for the sqft attribute
   * @return {Number} The square footage of the building
   */
  get sqft() {
    return this._sqft;
  }
}
