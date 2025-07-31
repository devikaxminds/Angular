// 3. Generic function returning User response
function getUser() {
    var user = { id: 1, name: "Devika", email: "devika@xminds.com" };
    return {
        statusCode: 200,
        success: "true",
        data: user
    };
}
// 4. Generic function returning Product response
function getProduct() {
    var product = { id: 101, name: "Laptop", price: 75000 };
    return {
        statusCode: 200,
        success: "true",
        data: product
    };
}
// Example usage
var userResponse = getUser();
console.log(userResponse);
var productResponse = getProduct();
console.log(productResponse);
