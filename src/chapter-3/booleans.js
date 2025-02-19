/*
    Booleans

    The boolean type consists of two values: true or false. Usually,
    you can obtain these values from comparison operations.
*/
console.log(3 < 4);
console.log(3 <= 4);
console.log(3 === 4);
console.log(3 !== 4);
console.log(3 >= 4);
console.log((3 > 4) + '\n');

/*
    Falsy and thuthy values

    In JavaScript, it's possible all types of values to a boolean value.
    But, JavaScript follow a defined standard to make this feature
    possible. Zero, BigInt zero, negative zero, undefined, null, NaN and
    empty string are converted to false. All other values are converted to
    true, including objects and arrays. Values that can be converted to
    false are falsy values. Values that can be converted to true are
    truthy values.

    We'll demonstrate the conversion of all falsy values in practice below.
*/
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(NaN))
console.log((Boolean('')) + '\n');

/*
    Logical operators

    Another way to obtain boolean values is using logical operators.
    Logical operators can be used to make more complex expressions based
    in boolean values. These expressions decide, based in which logical
    operators are used, if the result of the operation is false or true.

    We have four of then: AND, OR, NOT

    AND (&&) -> both values need to be true to evaluate to true;
    OR (||) -> At least one of the values need to be true to evaluate
    to true;
    NOT (!) -> Invert the value of a boolean, false to true, true to
    false;
*/
console.log((3 % 2 === 0) && (4 % 2 === 0));
console.log((3 % 2 === 0) || (4 % 2 === 0));
console.log(!((3 % 2 === 0) && (4 % 2 === 0)));
