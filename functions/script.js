//while loop


let i=0;
while(i < 10) {
    console.log(i);
    i++;
}

//THe for loop

for(let i = 0; i < 10; i++)  {
   console.log(i);
}

//FUNCTIONS
//A block of code => Performs a Task

//A fucntion declaration - defining a function

function square(number) {
    return number * number;
}

//A function Call - calling or executing a function
const result = square(6);

console.log(result);

// function name(params) {
//     //js statements
// }

//A fucntion expression
// const name =  function(params) {
//     //statements
// }
//An Arrow function expression -- MODERN WAY of creating function
//we will go with this
// const name = (paramas) => {
//     //statements
// }

function sayHi(rname) {
    console.log(`Hi!, ${rname}`);
}

//invoke function
sayHi('Raisa');

function add(a,b) {
    return (a + b);
}

const sum = add(2, 2);
console.log(sum);

//Arrow function - everything after the arrow is what the function returns
// const square = (number) => {
//     return number * number
// }
const squares = (number) => number * number;
const output = squares(10);
console.log(output);