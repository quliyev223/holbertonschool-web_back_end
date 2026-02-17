/**
 * Returns a resolved promise with the user's first and last name.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @returns {Promise} A promise that resolves to an object with firstName and lastName.
 */
export default function signUpUser(firstName, lastName) {
  // We return a new Promise that immediately resolves with the provided data
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName,
    });
  });
}
