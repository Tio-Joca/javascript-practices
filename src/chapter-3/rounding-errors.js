/*
    Floating-point numbers and rounding errors

    If you see the comments present in numbers.js, you saw some
    note about the usage of floating-point numeric values in
    JavaScript. This problem occurs because the IEEE-754 standard
    is good to represent fractions like (1 / (2 ^ x)). But, in
    most general cases, we need to represent fractions like 1/100.
    In this scenario, IEEE-754 standard can make floating-point
    values as closest as possible to the exact value, but not equal.
    This problem is not present only in JavaScript, other programming
    languages suffer with this same problem.
    
    So if you have to deal with fractional values, you'll have to
    consider some strategies to handle with this problem like using
    scaled integers.

    But, with the intention to demonstrate this problem, I put some
    code right after this comment to see this problem in practice.
*/
if ((0.3 - 0.2) === (0.2 - 0.1))    {
    console.log("0.3 - 0.2 is equal to 0.2 - 0.1\n");
}   else    {
    console.log("0.3 - 0.2 is not equal to 0.2 - 0.1\n");
}

if ((0.3 - 0.2) === 0.1)    {
    console.log("0.3 - 0.2 is equal to 0.1\n");
}   else    {
    console.log("0.3 - 0.2 is not equal to 0.1\n");
}

if ((0.2 - 0.1) === 0.1)    {
    console.log("0.2 - 0.1 is equal to 0.1");
}   else    {
    console.log("0.2 - 0.1 is not equal to 0.1");
}
