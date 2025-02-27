function ptaNhi(fn, delay) /* parameter -> function , delay */ {
  console.log(arguments);

  let myId;
  return function (...args) {
    /*  */
    myId = setTimeout(() => {
        clearTimeout(myId)
        fn.bind(this, args)
    }, delay);
  };
}

// ptaNhi("akshat", 24);
ptaNhi()
ptaNhi()
ptaNhi()

// call -> jab humara pass context nhi hota  (this le kar kaam kar raha tha)
// bind -> new function return karta hai
// apply ->  

// HOF -> Higher order function
// Tiffine Box concept -> if we return function then it take all the things from parent function
// clouser  === lexical scope
