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
)
// console.log(mostActiveUser);

