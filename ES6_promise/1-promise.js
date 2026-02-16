/**
 * Returns a promise based on the success boolean argument.
 * @param {boolean} success - The condition to resolve or reject.
 * @returns {Promise}
 */
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If success is true, resolve with an object
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      // If success is false, reject with an Error object
      reject(new Error('The fake API is not working currently'));
    }
  });
}
