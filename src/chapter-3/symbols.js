/*
    Symbols

    Before ES6, when you wanted to make objects, you had to use strings
    to define the names of the properties of your objects. With ES6, you
    can use symbols as names for the properties in your objects.
    
    Symbols are a feature to provide a resource to avoid errors like
    overriding property names that are used by an object. But, symbols
    can be used to provide a language extension mechanism.
    
    JavaScript doesn't provide a literal syntax, like when you want to
    use Number, String, Boolean and BigInt. If you want to use symbols,
    use the Symbol() function with a string as its argument. But, you
    have to know the fact about the Symbol() function, even if use this
    function more than one time with the same string argument, it won't
    provide the same symbol as its result. If you want to use symbols
    that will be the unique for some specific string, you'll need to use
    the Symbol.for() function.

    If you have used Symbol.for() function to create a Symbol, you want
    to obtain the string used as its argument, you'll need to use the
    Symbol.keyFor() function with the variable or constant name used to
    refer to the symbol.
*/

//  Creation of a symbol name for a object property
let strname = "username";
let symname = Symbol("username");
let person = {};

person[strname] = "Joaquim";
person[symname] = "Lucas";

console.log(person[strname]);
console.log((person[symname]) + '\n');

//  Equality comparison between symbols with same string argument
let a = Symbol("banana");
let b = Symbol("banana");

console.log(a);
console.log(b);
console.log((a == b) + '\n');

//  Strict equality comparison between symbols with same string argument
let c = Symbol("avocado");
let d = Symbol("avocado");

console.log(c);
console.log(d);
console.log((c === d) + '\n');

//  Creation of a Symbol with Symbol.for() function
let e = Symbol.for('e');
console.log(e.toString() + '\n');

//  Equality comparison between symbols created with Symbol.for()
let left = Symbol.for("related");
let right = Symbol.for("related");

console.log((left == right) + '\n');

//  Strict equality comparison between symbols created with Symbol.for()
let first = Symbol.for("shared");
let second = Symbol.for("shared");

console.log((first === second) + '\n');

//  Usage of Symbol.keyFor() function
let test = Symbol.for("dell");

console.log(Symbol.keyFor(test));
