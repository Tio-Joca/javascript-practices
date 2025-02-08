// Identifiers

/*
    Identifiers are the names provided by programmers to identify variables, constants,
    arrays, objects and other resources to be used in the algorithm. These identifiers
    sinalize for JavaScript to retain these names to reference kinds of data could be
    received along the execution of the code.
*/

let number = 12;
let _number = 13;
let $number = 14;

console.log(number);
console.log(_number);
console.log($number);

// Semicolons

// Firstly, I'll make some code right below.

console.log("It works perfectly!");
console.log("It works perfectly too!")

/*
    As you can see, the code above works without problems. In JavaScript, the use of
    semicolons is optional in most the cases. But, sometimes, the usage of semicolons is
    necessary.

    For example:

    let a = x + f
    (a + b).toString()

    If you do this in some code, JavaScript can interpret it as a single expression. In
    this case, if you have a function with "f" as its signature, the JavaScript will
    interpret this expression like this:

    let y = x + f(a + b).toString()

    In face of these possible errors while programming in JavaScript, even with the
    possibility to ommit the semicolons, the recommendation is to use semicolons right
    after the finalization of expressions.
*/