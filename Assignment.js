// Define a tuple type for cart
var cart = ["Apples", 5];
// Define an array containing multiple cart tuples
var cartList = [
    ["Apples", 5],
    ["Bananas", 10],
    ["Oranges", 7]
];
for (var _i = 0, cartList_1 = cartList; _i < cartList_1.length; _i++) {
    var _a = cartList_1[_i], product = _a[0], quantity = _a[1];
    console.log("Product: ".concat(product, ", Quantity: ").concat(quantity));
}
