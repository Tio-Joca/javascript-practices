/*
    Number type in JavaScript

    Numbers in JavaScript can be represented simply using
    them in your code. But, you have to keep in mind the 
    fact about the usage of IEEE-754 floating-point numbers
    representation implemented by default in JavaScript for
    numbers. It means the JavaScript can represent integers
    and floating-points numbers with the Number type.

    But you have to take some caution using this kind of type.
    If you have to use 64-bit integers, you'll have to use BigInt
    type. If you'll use real numbers in your algorithms, you have
    to consider the fact about the floating-point numbers imprecision
    and find some way to handle this problem.
*/

// Default base-10 numbers
console.log(0);
console.log(3);
console.log(-143);

// Default base-2 numbers
console.log(0b0);
console.log(0b10000000000);
console.log(-0b1011011000);

// Default base-8 numbers
console.log(0o0);
console.log(0o777);
console.log(-0o173);

// Default base-16 numbers
console.log(0x0);
console.log(0xf9);
console.log(-0x14);

// Floating-point numbers
console.log(0.0);
console.log(3.14);
console.log(-.23);
console.log(-2345.6789);
console.log(6.02e23);
console.log(1.4738223e-32);

// Separators in numeric literals
console.log(1_000_000_000);
console.log(0b1111_0100_0110);
console.log(0x77_14_23_11);
console.log(.123_456_789);
