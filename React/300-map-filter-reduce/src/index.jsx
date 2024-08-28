var numbers = [3, 56, 2, 48, 5];

//-----------------------------------------
//Map -Create a new array by doing something with each item in an array.
function double(x) {
    return x * 2;
}
const newNumbers1 = numbers.map(double);
console.log(newNumbers1);
//OR
const newNumbers2 = numbers.map((number) => {
    return number * 3
}); 
console.log(newNumbers2);
//OUTPUT: 9, 112, 4 96, 10

//-----------------------------------------

//Filter - Create a new array by keeping the items that return true.
const newNumbers3 = numbers.filter((number) => {
    return number <= 3
});
console.log(newNumbers3);
//OUTPUT: 3, 2

//-----------------------------------------

//Reduce - Accumulate a value by doing something to each item in an array.
const newNumbers4 = numbers.reduce((accumulator, number) => {
    return accumulator += number
});
console.log(newNumbers4);
//OUTPUT: 114

//-----------------------------------------

//Find - find the first item that matches from an array.
const newNumbers5 = numbers.find((number) => {
    return number = 3;
});
console.log(newNumbers5);
//OUTPUT: 3

//-----------------------------------------

//FindIndex - find the index of the first item that matches.
const newNumbers6 = numbers.findIndex((number) => {
    return number = 3;
});
console.log(newNumbers6);
//OUTPUT: 0

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
