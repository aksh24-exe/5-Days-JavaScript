// forEach
// signautre -- > Array ke harr ek ke liya cb ko call karta hai

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}

const arr = [1, 2, 3, 4];
arr.myForEach;
(value, index) => console.log(`At index: ${value} value:  ${index}`);
