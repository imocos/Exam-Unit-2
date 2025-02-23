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
