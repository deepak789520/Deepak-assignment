// 4.how to iterate over an array? explain with an example

/*we can iterate over an array in JavaScript using various methods like
 for loops, forEach, for of . Here's an example using a for-of loop
 
below is the expample for for loop forEach and for...of

 */
const array = [1, 2, 3, 4, 5];
const length = array.length;

for (let i = 0; i < length; i++) {
    console.log(array[i]);
}

const array2 = [1, 2, 3, 4, 5];

for (const element of array2) {
    console.log(element);
}
// This code iterates through each element in the array and logs it to the console.

const array3 = [1, 2, 3, 4, 5];

array3.forEach(function(element) {
    console.log(element);
});