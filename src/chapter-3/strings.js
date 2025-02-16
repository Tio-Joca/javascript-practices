// Strings in JavaScript

/*
    To represent and store a character or text in JavaScript, we need to
    use the string type to create a string value. This can be possible
    putting the desired character or text within single quotes, double
    quotes or backticks pairs.
*/
console.log('a');
console.log("papaya");
console.log(`Gabriela is the love of life\n`);

/*
    Strings with single quotes, double quotes or backticks within

    A string can have single quotes, double quotes or backticks within
    This is possible if you choose one of these characters as a string
    delimiter. If you did your choice, you are free to use the other two
    characters in your string without restrictions.
*/
console.log('"Some `random` text."');
console.log("'Some `random` text.'");
console.log(`"Some 'random' text."\n`);

/*
    Longer Strings

    If you want to store longer strings that need to be displayed in a
    single line while you want to simplify to visualization of this
    string in your source code, you can use the backslash character to
    divide this string while you're programming.

    Otherwise, you can use the + operator to concatenate substrings to
    make the entire string you want to display in a single line.
*/

let x = "one, \
two, \
three.";
console.log(x);

let y = "Apple, " +
        "Banana, " +
        "Strawberry.";
console.log(y + '\n');

/*
    Strings with multiple lines

    If you want to store longer strings that will have more than one
    line, you can store the string with backsticks. If you do this,
    just press the enter button when you want the current line ends
    and start the string new line.

    Otherwise, you can use new line character (\n) to make a line
    break in your string.
*/

let a = `JavaScript
The web programming language.`;
console.log(a);

let b = "I7-9750HQ\nRTX 2060";
console.log(b);
