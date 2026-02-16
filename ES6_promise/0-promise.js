/**
 * Returns a Promise to simulate an API response.
 * The Promise is immediately resolved to fulfill the task requirements.
 * * @returns {Promise} A new Promise object.
 */
export default function getResponseFromAPI() {
  // We return a new instance of a Promise
  return new Promise((resolve, reject) => {
    /* A Promise takes a function with two arguments:
       1. resolve: called when the operation is successful.
       2. reject: called when the operation fails.
    */
    
    // For this specific task, we simply trigger resolve to fulfill the Promise.
    resolve();
  });
}
