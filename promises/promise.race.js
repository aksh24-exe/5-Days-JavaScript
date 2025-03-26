const resolvePromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolved!");
    }, 1000);
  });
};
// Function that returns a rejected promise
const rejectPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected!");
    }, 500);
  });
};
// Use Promise.race() to see which promise settles first
Promise.race([resolvePromise(), rejectPromise()])
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((error) => {
    console.log("Error", error);
  });
