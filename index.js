// problem solving

// 1. countVowels

function countVowels(str) {
  str = str.toLowerCase();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Your Name")); 
console.log(countVowels("I Love My Country")); 


// 2. array sorted in ascending order

function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}

console.log(sortNumbers([4, 1, 8, 3]));

// 3. reverseString
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); 

// 4. returns the last element.
function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([10, 20, 30, 40]));

// 5. array containing elements
function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2], [3, 4]));

// 6. space character
function hasSpace(str) {
  return str.includes(' ');
}

console.log(hasSpace("Ostad Limited"));  
console.log(hasSpace("Ostad"));  


// 7. Empty String
function isEmptyString(str) {
  return str === '';
}

console.log(isEmptyString(""));  
console.log(isEmptyString("Hello")); 

// 8. Remove Negative Numbers
function removeNegativeNumbers(arr) {
  return arr.filter(num => num >= 0);
}

console.log(removeNegativeNumbers([-5, 2, -1, 6, 0]));

