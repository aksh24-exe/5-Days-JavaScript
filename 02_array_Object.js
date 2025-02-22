const chaiType = ["Masala Chai", "Ginger chai", "Green Tea", "Lemon Tea"];

// console.log(chaiType[0]);

console.log(`Total chai Types: ${chaiType.length}`);

chaiType.push("Herbal Tea");
chaiType.pop("Herbal Tea");

let index = chaiType.indexOf("Green Tea");

if (index !== 1) {
  chaiType.splice(index, 1);
}

// console.log(chaiType);

chaiType.forEach((chai, index) => {
  //   console.log(`${index + 1}: ${chai}`);
});

let morechaiTypes = ["Oolong Tea", "White Tea"];

let allchaiTypes = chaiType.concat(morechaiTypes);

let newChaiTypes = [...chaiType, "Chamolina Tea"];

//  Object Literals

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown Sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil Water, add tea leavs, milk, sugar and spices",
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction: "Boil Water, add tea leavs, milk, sugar, spices with some love",
};

let { name, ingredients } = chaiRecipe; //Object Destructure
let [firstChai, secondChai] = chaiType; //Array Destructure

console.log(firstChai);
console.log(secondChai);

