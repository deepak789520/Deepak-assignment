// 1. Generate * pattern to construct a pyramid
//     *
//    *** 
//   *****
//  *******
// *********

function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        let row = ' '.repeat(height - i) + '*'.repeat(2 * i - 1)
        console.log(row)
    }
}

generatePyramid(5)
