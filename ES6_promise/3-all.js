import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Resolve all promises concurrently
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      // Destructure data from the resolved array
      const { body } = results[0];
      const { firstName, lastName } = results[1];

      // Log results to the console
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      // Handle any error in the promise chain
      console.log('Signup system offline');
    });
}
