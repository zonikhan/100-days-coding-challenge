// (Q127) Converting Traditional Functions to Arrow Functions
// Explored converting traditional function expressions into arrow functions, observing the concise syntax and improved readability.

// // Traditional function expression
const traditionalFunction = function (a, b) {
    return a + b;
  };
  
  // Converted to arrow function
  const arrowFunction = (a, b) => a + b;
  
  console.log(traditionalFunction(5, 3)); // Outputs: 8
  console.log(arrowFunction(5, 3)); // Outputs: 8
  // Demonstrates the conversion of a traditional function expression to an arrow function.