// Define union type for HTTP status codes
type HttpStatusCode = 200 | 201 | 400 | 401 | 404 | 500;

// Arrow function to print response message
const printResponseMessage = (status: HttpStatusCode): void => {
  let message: string;

  switch (status) {
    case 200:
      message = "OK - Request successful";
      break;
    case 201:
      message = "Created - Resource created successfully";
      break;
    case 400:
      message = "Bad Request - Invalid input";
      break;
    case 401:
      message = "Unauthorized - Authentication required";
      break;
    case 404:
      message = "Not Found - Resource not found";
      break;
    case 500:
      message = "Internal Server Error - Something went wrong";
      break;
  }

  console.log(`Status: ${status}, Message: ${message}`);
};

// Example usage
printResponseMessage(200);
printResponseMessage(404);
printResponseMessage(500);