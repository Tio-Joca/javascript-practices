/*
    Numerical values less or greater than integer range provided by
    Number type

    What happens if you try to represent or store an numerical value
    less or greater than the integer range of possible values that
    can be represented by a number type in JavaScript?

    In this scenario, JavaScript will provide an Infinity value for
    a positive value. But, if the value is negative, JavaScript will
    provide an -Infinity value.
*/
console.log(Number.MAX_VALUE * 2);
console.log((-Number.MAX_VALUE * 2) + '\n');

/*
    Division by zero

    Similarly to the previous case, JavaScript will provide an Infinity
    value if the dividend is positive and an -Infinity value if the 
    dividend is negative.
*/
console.log(12.4 / 0);
console.log((-314 / 0) + '\n');

/*
    Zero divided by zero

    In this case, JavaScript will provide a NaN value for this operation
*/
console.log(0 / 0);
console.log(-0 / 0);
console.log(0 / -0);
console.log((-0 / -0) + '\n');

/*
    Numerical values less or greater than fractional range provided by
    Number type

    In this case, JavaScript will provide a zero value for operations
    that produce positive values and negative zero for operations that
    produce negative values
*/
console.log(-Number.MIN_VALUE / 2);
console.log((Number.MIN_VALUE / 2) + '\n');

/*
    Infinity divided by Infinity

    In this scenario, JavaScript will provide a NaN value for this kind
    of operation
*/
console.log(Infinity / Infinity);
console.log(-Infinity / Infinity);
console.log(Infinity / -Infinity);
console.log((-Infinity / -Infinity) + '\n');

/*
    Division by Infinity

    In this situation, JavaScript will provide a zero or a negative zero
    for this kind of operation
*/
console.log(1 / Infinity);
console.log(-1 / Infinity);
console.log(1 / -Infinity);
console.log((-1 / -Infinity) + '\n');

// Some Number methods and properties
console.log(Number.parseInt("-12"));
console.log(Number.parseFloat("-3.14"));
console.log(Number.isNaN(NaN));
console.log(Number.isFinite(Number.MAX_VALUE));
console.log(Number.isInteger(Number.MAX_SAFE_INTEGER * 1024));
console.log((Number.isSafeInteger(Number.MIN_SAFE_INTEGER)) + '\n');

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.EPSILON);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log((Number.NaN) + '\n');

/*
    NaN particularities

    If you try to compare the equality from a NaN value with another NaN
    value, JavaScript will evaluate this comparison to false. But, if you
    try to see if a NaN value is a NaN value with Number.isNaN() method,
    JavaScript will return true.
*/
if (NaN === NaN)    {
    console.log("NaN is equal to NaN.\n");
}   else    {
    console.log("NaN is not equal to NaN.\n")
}

if (Number.isNaN(NaN))  {
    console.log("NaN is NaN.\n");
}   else    {
    console.log("NaN is not NaN.\n");
}

/*
    Zero and negative zero particularities

    Despite a little difference between zero and negative zero, if you try
    to compare the equality between zero and negative zero, JavaScript will
    return true. But, if you try to compare the equality from a division
    using zero as divisor and another division using negative zero as divisor
    with the same dividend, JavaScript will evaluate this operation to false.
*/
if (0 === -0)   {
    console.log("0 is equal to -0\n");
}   else    {
    console.log("0 is not equal to -0\n");
}

if ((1 / 0) === (1 / -0)) {
    console.log("true");
}   else    {
    console.log("false");
}
