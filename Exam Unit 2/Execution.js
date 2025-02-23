//Functions

//Function that gives back the square of a number

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(16));

//function that returns amount in mm assuming that it was given in inches (1 inch = 25.4 mm)

function convertInchToMili(number) {
    return number * 25.4;
}

console.log(convertInchToMili(10));

//function that returns root of a number

function root(number) {
    return Math.sqrt(number);
}

console.log(root(25));
console.log(root(625));

//function that returns the cube of a number

function cube(number) {
    return number * number * number;
}

console.log(cube(2));
console.log(cube(10));

