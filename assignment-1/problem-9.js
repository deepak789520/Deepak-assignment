// 9. Implement array reversal. dont use builtin function

function reverseArray(Array) {
    const length = Array.length;
    for (let i = 0; i < length / 2; i++) {
        const temp = Array[i];
        Array[i] = Array[length - 1 - i];
        Array[length - 1 - i] = temp;
    }
}

const Array = [1, 2, 3, 4, 5];
reverseArray(Array);
console.log(Array);