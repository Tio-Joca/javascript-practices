/*
    Big integers in JavaScript

    BigInt type was introduced in ES2020 to make possible the
    usage of 64-bit integers values.

    This type can be used to represent and store bigger integers
    values for bitwise, comparison and arithmetic operations.

    To use an integer value with BigInt type, you'll need to put
    a 'n' character in the right of the integer that will be used.

    But, you have to keep in mind the fact you can't realize
    arithmetical and bitwise operations mixing numerical values
    from BitIng type and Number type.
    
    However, it's possible to make comparison mixing these two
    numerical types without problems.

    Last but not least, despite the fact of BigInt type is used
    for numerical integer values, it can't be used with the Math
    object.
*/

// BigInt base-10 numbers
console.log(10000000000000n);

// BigInt base-2 numbers
console.log(0b1100011001n);

// BigInt base-8 numbers
console.log(0o4737n);

// BigInt base-16 numbers
console.log(0xfffn + '\n');

// Usage of BigInt constructor to convert strings or numbers into BigInt
console.log(BigInt("234556663"));
console.log(BigInt(314) + '\n');

// Addition with BigInt values
console.log(300n + 400n);
console.log(-300n + 400n);
console.log(300n + -400n);
console.log((-300n + -400n) + '\n');

// Subtraction with BigInt values
console.log(512n - 128n);
console.log(-512n - 128n);
console.log(512n - -128n);
console.log((-512n - -128n + '\n'));

// Multiplication with BigInt values
console.log(23n * 23n);
console.log(-23n * 23n);
console.log(23n * -23n);
console.log((-23n * -23n) + '\n');

// Division with BigInt values
console.log(23n / 2n);
console.log(-23n / 2n);
console.log(23n / -2n);
console.log((-23n / -2n) + '\n');

// Exponentiation with BigInt values
console.log(31n ** 2n);
console.log(((-31n) ** 2n) + '\n');

// Modulo with BigInt values
console.log(7n % 5n);
console.log(-7n % 5n);
console.log(7n % -5n);
console.log((-7n / -5n) + '\n');

// Comparison between BigInt values and Number values
console.log(2n < 2);
console.log(2 <= 2);
console.log(2n >= 2);
console.log(2n > 2);
console.log(2n == 2);
console.log(2n === 2);
console.log(2n != 2);
console.log(2n !== 2);
