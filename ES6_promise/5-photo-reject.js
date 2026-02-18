export default function uploadPhoto(fileName) {
  /* Promise.reject() is a shorthand to return a promise 
     that is already in the 'rejected' state.
  */
  return Promise.reject(new Error(`${fileName} cannot be processed`));
}
