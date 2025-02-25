/*
    Immutable primitive values

    In JavaScript, all primitives values are considered immutable.

    "But, if I change the value assigned to variable used to store
    a number value, Wasn't I changing the numerical value itself?"

    The answer is no. In the example situation described above, you
    are changing the variable value, not the numerical value itself.

    "Okay, this standard is valid for other primitive values like
    booleans, null, undefined, big integers and strings?"

    The answer is yes.
    
    Even strings are immutable in JavaScript because it works like
    a read-only array of characters, which means you can read the
    content of the string, but can't change its content.

    "So, what happens when I use an string method like toUpperCase()?"

    The return of the method calling is a new string using the string
    used for the method call.
*/

//  Some example of immutability with a string
let word = "Immutable";
word.toUpperCase();
console.log((word) + '\n');

/*
    If you pay attetion to the immutability example with a string, you
    saw an declaration of a variable using the keyword var. We'll
    explain what this keyword means in more details later.
    
    But, when you create a variable, generally you think you can change
    the value of the type stored in it. Despite this perception, when
    we talk about primivite values, it's not possible to change its
    value by itselt, even when they are stored in variables.

    Variables are only a more comprehensive way to manipulate memory
    addresses, these will be used to store different kinds of data with
    the ability to provide reassignment to allow storage of new data
    values, it doesn't interfere in immutability of primitive types.
*/

/*
    Mutable array and object reference

    By other side, arrays and objects are mutable types, which means
    you can change the value of an array or object itself.

    Also, you can call this types as reference types.

    The only thing immutable about arrays and objects is your
    reference in memory address, which means each array and object
    have a specific memory address destinated to indicate its
    location in primary memory when the program is executed.
*/

//  Some example of mutability with an array
const vector = [2, 3, 5, 7];

console.log(vector);

vector[vector.length] = 11;

console.log((vector) + '\n');

//  Some example of mutability with an object
const car = {
    model : "S Class",
    engine : "V 12"
};

console.log(car);

car.doors = 4n;
car.horsepower = 700n;
car.color = "Silver";

console.log(car);

/*
    If you pay attention to the examples of mutability with an array and
    with an object, you saw an declaration of a constant using the
    keyword const. We'll explain this keyword in more details later.

    But, when you create a constant, generally, you think you can not
    change the value of the type stored in it. Despite this perception,
    when we talk about arrays and objects, it's possible to change its
    value it itself, even when they are stored in constants.

    Constants are only a more comprehensive way to manipulate memory
    addresses, these will be used to store some primivite value or
    reference to an array or object with the ability to deny
    reassignment to maintain the value or reference preserved for usage
    in your program, it doesn't interfere in mutability of array or
    objects.
*/

/*
    Immutable primitive values and comparison by value

    Due to the fact about its immutability, primitive values are
    compared by its value, even when the values are stored in different
    variables or constants.
*/
let a = "keyword";
const b = "keyword";

console.log('\n' + (a === b) + '\n');

/*
    Mutable array and object reference and its comparison by reference

    Due to the fact about its mutability, arrays and objects are
    compared by its reference to the memory address in primary memory,
    even when the reference to an array or object are stored in
    different variables or constants.
    
    It means, an array or object will considered equal to another array
    if and only if the references between both are equal, even if the
    content inside the array or object are equal. Keeping this in mind,
    when you assign a variable or constant containing a array or object
    reference to another variable or constant, JavaScript will copy the
    memory address referenced by the variable or constant used in the
    assignment process to share the same reference with the variable or
    constant that will receive the assignment.
*/
let c = [1024n, 2048n, 4096n, 8192n];
const d = [1024n, 2048n, 4096n, 8192n];

console.log(c === d);

const e = c;

console.log(e === c);
