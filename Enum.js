// 1. Define Enum for Product Categories
var Category;
(function (Category) {
    Category["Fruits"] = "Fruits";
    Category["Vegetables"] = "Vegetables";
    Category["Electronics"] = "Electronics";
})(Category || (Category = {}));
// 3. Define an array of cartList containing multiple cart tuples
var cartsList = [
    ["Apple", 5, 10, Category.Fruits],
    ["Banana", 10, 5, Category.Fruits],
    ["Carrot", 7, 8, Category.Vegetables],
    ["Headphones", 1, 1500, Category.Electronics]
];
// 4. Display all elements using a for...of loop
for (var _i = 0, cartsList_1 = cartsList; _i < cartsList_1.length; _i++) {
    var _a = cartsList_1[_i], product = _a[0], quantity = _a[1], price = _a[2], category = _a[3];
    console.log("Product: ".concat(product, ", Quantity: ").concat(quantity, ", Price: ").concat(price, ", Category: ").concat(category));
}
// Calculate total cost using reduce
var totalCost = cartsList.reduce(function (acc, _a) {
    var quantity = _a[1], price = _a[2];
    return acc + (quantity * price);
}, 0);
// 5. Print total cost
console.log("Total Cost: ".concat(totalCost));
