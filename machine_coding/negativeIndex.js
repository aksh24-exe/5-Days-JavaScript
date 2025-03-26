
// console.log(arr[-1]);   ->  undefine

const user = {
  name: "hitesh",
  age: 40,
  password: "123",
};

// console.log(user["name"]);  ->  hitesh

// const proxyUser = new Proxy(user, {
//   get(target, prop) {
//     console.log(target);
//     console.log(prop);
//     if (prop == "password") {
//       throw new Error("Access Denied");
//     }
//     return target[prop];
//   },
//   set(target, prop, user){

//   }
// });
// console.log(proxyUser.password);

// .length is a proxy

// [1, 2, 3, 4, 5] - 2;
// 5 + -2;


function negativeIndex(arr) {
  return new Proxy(arr, {
    get(target, prop) {
        // console.log(target);
        // console.log(prop);
        
      const index = Number(prop);
      console.log("3",index);
      
      if (index < 0) {
        console.log("4",target.length);
        console.log("4",target[target.length + index]);
        
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
        console.log("5",target);
        console.log("6",prop);
        console.log("7",value);
        
      const index = Number(prop);
      if(index < 0){
        target[target.length + index] = value
      }else{
        target[index] = value
      }
      return true;
    },
  });
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newArr = negativeIndex(arr)
newArr[-1] = 11
console.log("8",newArr[-1]);

// console.log(arr[-1]);
// console.log(newArr[-1]);

// newArr[-1] = 22;
// console.log(newArr);
// console.log(arr);

// proxy ka pollyfil likh do
// debounding , throthling

