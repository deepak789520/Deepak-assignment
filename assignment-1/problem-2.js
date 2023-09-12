// 2. Upside down pyramid
// *********
//  *******
//   *****
//    ***
//     *

function generateUpsideDownPyramid(height) {
    for (let i = height; i >= 1; i--) {
        let row = ' '.repeat(height - i) + '*'.repeat(2 * i - 1);
        console.log(row);
    }
}

generateUpsideDownPyramid(5);
