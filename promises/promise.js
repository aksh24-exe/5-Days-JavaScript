// Promise.allSettled():

// Behavior:
//It returns a single promise that is fulfilled with an array of result objects, one for each promise.
// Each result object contains:
// a status (either "fulfilled" or "rejected") and
// a value (fulfilled value) or reason (rejection reason).

// Use Case:
// Useful when you want to process all promises, whether they succeed or fail,
// and you want to gather information about the outcome of each promise.

//case 2:
//f1 resolved
//f2-- rejected
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: data is not available from getError");
    }, 2000);
  });
};
const getError = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error: data is not available from getError");
    }, 2000);
  });
};
Promise.allSettled([getData(), getError()])
  .then((dataArray) => {
    console.log("All data fetched: " + dataArray);
  })
  .catch((error) => {
    console.log("Error occured: ", error);
  });
