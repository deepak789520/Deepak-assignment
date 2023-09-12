// 3. diamond shape

//     *
//    *** 
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

function generateDiamond(height) {
    for (let i = 1; i <= height; i++) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    for (let i = height - 1; i >= 1; i--) {
        let spaces = ' '.repeat(height - i);
        let stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

generateDiamond(5);
