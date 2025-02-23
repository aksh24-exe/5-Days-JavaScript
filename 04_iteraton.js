let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphone", price: 500 },
  { product: "Keyboard", price: 350 },
];

let initialValue = 0;
let totalSales = salesData.reduce(
  (acc, sale) => acc + sale.price,
  initialValue
);
// console.log(totalSales);

// Item less then 50

let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => item.stock < 50); // return atleast array
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
// console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    report[expense.category] = (report[expense.category] || 0) + expense.amount;
    return report;
  },
  { Food: 0, Utilities: 0 }
);

// console.log("Expense Report", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },

  { description: "Send email", completed: true, priority: 3 },

  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);
// console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movieRating) => {
  let total = movieRating.ratings.reduce((sum, rating)=> sum + rating,0)
  let average = total / movieRating.ratings.length  
  
  return {title: movieRating.title, average: average.toFixed(2)};
}) 

// let averageRatings = movieRatings.map((movieRating) => {
//   let average =0
//   for(let i=0;i<movieRating.ratings.length;i++){
//       average = average + movieRating.ratings[i];

//   }
//   average = average / movieRating.ratings.length
//   return {title: movieRating.title, average: average.toFixed(2)};
// }) 

console.log(averageRatings);
