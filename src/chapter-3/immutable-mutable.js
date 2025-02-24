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

//  Some example of immutability with string
let word = "Immutable";
word.toUpperCase();
console.log(word);

/*
    Mutable object reference
*/
