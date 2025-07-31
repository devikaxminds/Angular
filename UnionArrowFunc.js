// Arrow function to print response message
var printResponseMessage = function (status) {
    var message;
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
    console.log("Status: ".concat(status, ", Message: ").concat(message));
};
// Example usage
printResponseMessage(200);
printResponseMessage(404);
printResponseMessage(500);
