import Building from './5-building.js';

/**
 * SkyHighBuilding class that extends the Building class.
 */
export default class SkyHighBuilding extends Building {
  /**
   * Constructor for SkyHighBuilding.
   * @param {Number} sqft - The square footage of the building.
   * @param {Number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    // Call the parent class (Building) constructor to initialize _sqft
    super(sqft);
    // Store floors in an underscore attribute
    this._floors = floors;
  }

  /**
   * Getter for the sqft attribute.
   * @returns {Number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Getter for the floors attribute.
   * @returns {Number} The number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Overrides the evacuationWarningMessage method from the parent class.
   * @returns {String} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
