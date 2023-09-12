// 07.Implement your own search function for strings. dont use builtin function

function StringSearch(text,input) {
    for (let i = 0; i <= text.length -input.length; i++) {
        let match = true;
        for (let j = 0; j <input.length; j++) {
            if (text[i + j] !==input[j]) {
                match = false;
                break;
            }
        }
        if (match) {
          console.log(i)
            return i;// Return the starting index of the first match
        }
    }
    return -1; // Return -1 if the search term is not found
}

const text = "This is a sample text.";
const input = "sample";
const result = StringSearch(text, input);

if (result !== -1) {
    console.log(`"${searchWord}" found at index ${result}`);
} else {
    console.log(`"${searchWord}" not found in the text.`);
}