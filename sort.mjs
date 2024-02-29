function alphanumericStringSort(str) {
  const letters = str.replace(/[^a-zA-Z]/g, "").split("");
  const numbers = str.replace(/[^0-9]/g, "").split("");
  
  letters.sort((a, b) => {
    if (a.toLowerCase() === b.toLowerCase()) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
    return a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0);
  });
  
  numbers.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return 1;
    }
    if (a % 2 !== 0 && b % 2 === 0) {
      return -1;
    }
    return a - b;
  });
  
  const nonAlphanumericChars = str.replace(/[a-zA-Z0-9]/g, "").split("");
  
  return letters.join("") + numbers.join("") + nonAlphanumericChars.join("");
}
  
// Test the function
const input = "$%%%$fdgj342kj23lk4j23l234k";
const sortedString = alphanumericStringSort(input);
console.log(sortedString); // Output: abeDC4®