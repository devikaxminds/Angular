// 1. Generic Read-only API Response Interface
interface ApiResponse<T> {
  readonly statusCode: number;
  readonly success: string;
  readonly data: T;
}

// 2. Example types
type User = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

// 3. Generic function returning User response
function getUser(): ApiResponse<User> {
  const user: User = { id: 1, name: "Devika", email: "devika@xminds.com" };

  return {
    statusCode: 200,
    success: "true",
    data: user
  };
}

// 4. Generic function returning Product response
function getProduct(): ApiResponse<Product> {
  const product: Product = { id: 101, name: "Laptop", price: 75000 };

  return {
    statusCode: 200,
    success: "true",
    data: product
  };
}

// Example usage
const userResponse = getUser();
console.log(userResponse);

const productResponse = getProduct();
console.log(productResponse);
