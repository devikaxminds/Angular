// Define a tuple type for cart
let cart: [string, number] = ["Apples", 5];

// Define an array containing multiple cart tuples
let cartList: [string, number][] = [
  ["Apples", 5],
  ["Bananas", 10],
  ["Oranges", 7]
];
for (const [product, quantity] of cartList) {
  console.log(`Product: ${product}, Quantity: ${quantity}`);
}