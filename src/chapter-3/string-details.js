/*
    Concatenation of strings

    Strings can be concatenated using the + operator.
*/
console.log('a' + 'p' + 'r' + 'i' + 'l');
console.log("Another" + ' ' + "string" + ' ' + "concatenation");
console.log(`She's ` + `out ` + `of ` + `my ` + `life\n`);

/*
    Length of a string

    If you want to know the length of a string, you can use
    the length property to know this information.
*/
console.log(("Another day in paradise".length) + '\n');

/*
    Comparison between strings

    It's possible to make comparison between strings using
    the comparison operators.
*/
console.log("test" == "TEST");
console.log("test" != "TEST");
console.log("test" === "TEST");
console.log("test" !== "TEST");
console.log("test" < "TEST");
console.log("test" <= "TEST");
console.log("test" > "TEST");
console.log(("test" >= "TEST") + '\n');

// Some string methods
let text = "JavaScript: In the minimum details";
console.log(text.substring(0, 10)); //  Older method to extract substrings from a string
console.log(text.slice(0, 10)); //  Newer method to extract substring from a string
console.log(text.split(": "));
console.log(text.indexOf('m'));
console.log(text.lastIndexOf('details'));
console.log(text.startsWith("Script", 4));
console.log(text.endsWith("minimum", 26));
console.log(text.includes("Java", 4));
console.log(text.replace("JavaScript", "Python"));
console.log(text.toLowerCase());
console.log(text.toUpperCase());
console.log(text.normalize("NFD")); //  Useful to standardize Unicode strings with different representations
console.log(text.charAt(12));
console.log(text.charCodeAt(4));    //  Older method to know the 16-bit character integer value
console.log(text.codePointAt(0));   //  Newer method to know the character integer value from characters represented by 16-bits or more
console.log(text.padStart(50, '#'));
console.log(text.padEnd(50, '#'));
text = "     " + text + "     ";
console.log(text);
console.log(text.trim());
text = text.trimEnd();
console.log(text);
text = text.trimStart();
console.log(text + '\n');

/*
    Strings are immutable values

    What it means, when you use some method provided by a string,
    you aren't change the content of the string itself. What happens
    when you use these methods is the creation of a new string based
    in the string used for method calling.
*/

/*
    Strings as read-only arrays

    Strings can be used as read-only arrays, if you want to use a
    character contained at a specific index of the string.

    If you want to do this, you'll need to use the square brackets
    ([]). This is the same as using the chartAt method.
*/

let letters = text.trim();
console.log(letters[5]);
