/*
    Regular expressions in JavaScript

    Regular expressions are used to determine if a sequence of characters
    are valid to be used in some context or applicaton based in some pattern
    determined by a programmer. This resource is used in various computacional
    tools like programming language compilers and interpreters. But, you can
    also use this resource to verify if string passed to program referrer to
    an e-mail or URL.

    Right now, we'll make a simple overview. In chapter 11, we'll cover regular
    expressions in more details.

    To create a RegExp object, we'll need to put the desired pattern between a
    matched pair of slashs.
*/
let text = "numbers: 1, 2, 3";
let pattern = /\d+/g;
console.log(pattern.test(text));
console.log(text.search(pattern));
console.log(text.match(pattern));
console.log(text.replace(pattern, '#'));
console.log(text.split(/\D+/));