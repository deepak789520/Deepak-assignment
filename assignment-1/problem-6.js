// 6. how iterate over an object data? explain with an example
/*we can iterate over the properties of an object using a for...in loop. Here's an example*/

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(key + ": " + person[key]);
}