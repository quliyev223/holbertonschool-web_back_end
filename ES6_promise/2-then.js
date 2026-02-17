/**
 * Appends handlers to a promise to manage the API response.
 * @param {Promise} promise - The promise object to be handled.
 * @returns {Promise} - Returns the promise chain with then, catch, and finally.
 */
export default function handleResponseFromAPI(promise) {
  // We return the promise chain so that it can be further utilized if needed.
  return promise
    .then(() => {
      /* When the promise resolves successfully, 
         we return the specific object required by the task.
      */
      return { status: 200, body: 'success' };
    })
    .catch(() => {
      /* When the promise rejects (fails), 
         we return a new empty Error object.
      */
      return new Error();
    })
    .finally(() => {
      /* The finally block executes regardless of whether the promise
         was fulfilled or rejected. This fulfills the requirement to 
         log the message for every resolution.
      */
      console.log('Got a response from the API');
    });
}
