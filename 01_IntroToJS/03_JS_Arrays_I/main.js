// Activity 1
/*
myArray = [42, "Hello, world!", true, 3.14, "JavaScript"];

console.log("myArray: ", myArray);

myArray.forEach(element => {
    console.log(element + ' ');
});

myArray[1] =  "Changed value"

myArray.forEach(element => {
    console.log(element + ' ');
});

// Activity 2

myArray = [1, 2, 3, 4, 5]

// Add Elements to the End of the Array
// myArray += 6 // not python

myArray.push(7)
console.log(myArray);

// Remove the Last Element from the Array

myArray.pop()
console.log(myArray);

// Remove the First Element from the Array
let res = myArray.shift()

// Add Elements to the Beginning of the Array:
myArray.unshift(0)
myArray.unshift(-1)

console.log(myArray);

// Activity 3

// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
// Reverse array1 in place and print the result
array1.reverse()
console.log(array1);

// Array 2: Use toReversed() method
const array2 = ['a', 'b', 'c', 'd', 'e'];
let arr = array2.toReversed()

console.log(arr);
console.log(array2);

arr.push(6)
array2.push(8)

console.log(arr);
console.log(array2);

// Activity 4

// You can work here or download the template!
// Array 1: Use splice() method
const array1 = [10, 20, 30, 40, 50];
// Modify array1 in place by removing and adding elements, then print the result

const arr1 = array1.splice(2)

console.log(arr1);
console.log(array1);

// Array 2: Use toSpliced() method
const array2 = ['x', 'y', 'z'];
// Create a modified copy of array2 and print both arrays

const arr2 = array2.toSpliced(1)

console.log(arr2, array2);

// Activity 5

// You can work here or download the template!
const array = [2, 4, 6, 8, 10, 12, 14, 16];
// Extract different portions of the array and print the results

const arr3 = array.slice(3, 5)

console.log(array);
console.log(arr3);


// Activity 6

// You can work here or download the template!
const array = ['apple', 'banana', 'cherry', 'date'];

// Create different strings by joining the array elements with various delimiters

// Default delimiter (comma)
console.log(array.join())

// Using dash as delimiter
console.log(array.join('-'))

// Using space as delimiter;
console.log(array.join(' '))

// Using ' and ' as delimiter
console.log(array.join(" and "))

// Without any delimiter
console.log(array.join(''))

*/

// Activity 7

const numberArray = [10, 20, 30, 40, 50];

function doubleThat(a) {
  console.log(2 * a);
}

console.log("========================");

numberArray.forEach(doubleThat);

console.log("========================");

let i = 0
while (i < numberArray.length) {
    console.log(numberArray[i]);
    ++i;
}
console.log("========================");

for (const elt of numberArray) {
  console.log(elt);
}
