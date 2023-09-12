// 3. Find sum of N numbers
// eg  1,2,3,4,5....N 

function findSumUsingLoop(N) {
    let sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}

const N = 5; // Change this to the desired value of N
const sum = findSumUsingLoop(N);
console.log(`Sum of numbers from 1 to ${N} is: ${sum}`);
