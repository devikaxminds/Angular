export {};
// 1. Define Enum for Product Categories
enum Category {
  Fruits = "Fruits",
  Vegetables = "Vegetables",
  Electronics = "Electronics"
}

// 2. Define a tuple for cart: [ProductName, Quantity, PricePerItem, Category]
type Cart = [string, number, number, Category];

// 3. Define an array of cartList containing multiple cart tuples
let cartsList: Cart[] = [
  ["Apple", 5, 10, Category.Fruits],
  ["Banana", 10, 5, Category.Fruits],
  ["Carrot", 7, 8, Category.Vegetables],
  ["Headphones", 1, 1500, Category.Electronics]
];

// 4. Display all elements using a for...of loop
for (const [product, quantity, price, category] of cartsList) {
  console.log(`Product: ${product}, Quantity: ${quantity}, Price: ${price}, Category: ${category}`);
}

// Calculate total cost using reduce
let totalCost: number = cartsList.reduce((acc, [, quantity, price]) => {
  return acc + (quantity * price);
}, 0);

// 5. Print total cost
console.log(`Total Cost: ${totalCost}`);
