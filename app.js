let stringExample = "fIONa";

function capitalize(string) {
  let stringSeperate = string.split("");
  let firstLetter = stringSeperate[0].toUpperCase();
  let allButTheFirstLetter = stringSeperate.slice(1).join("");
  let lowerCase = allButTheFirstLetter.toLowerCase();
  return firstLetter + lowerCase;
}
console.log(capitalize(stringExample));

let lastLetterString = "Madison";

function lastLetter(string) {
  let stringSeperate = string.split("");
  let lastLetterOfString = stringSeperate[string.length - 1];
  return lastLetterOfString;
}

console.log(lastLetter(lastLetterString));

// Find the third highest number

let nums = [12, 3, 6, 7, 8, 1, 5, 21, 5, 7];

// Find the highest number first
// loop through the array
// compare each iteration to the previous if the current > previous return the current

let highest = nums[0]; // Initialize highest to the first element of the array

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > highest) {
    highest = nums[i]; // Update highest if the current element is greater
  }
}

console.log("The highest number is:", highest);

// Now finding the 2nd highest.
// Make a new array without the highest.
let newArray = [];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== highest) {
        newArray.push(nums[i]); // Add the number to newArray if it's not the highest
    }
}

console.log("New array w/o the highest number" + " " + newArray)
highest = newArray[0]
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > highest) {
      highest = newArray[i]; // Update highest if the current element is greater
    }
  }
  
  console.log("The 2nd highest number is:", highest);

  // Repeat this dog shi code to get the third highest number 
