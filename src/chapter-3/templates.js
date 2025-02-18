/*
    Template literals

    If you use backticks to represent or store strings, you can also template
    literals in your strings. Template literals are JavaScript expressions
    within a string. These expressions are evaluated before the creation of
    the string that will contain the result of the expression inside of it as
    a text data.
*/
let person = "Gabriela";
console.log(`Hello ${person}\n`);

/*
    Tagged template literals

    Template literals are useful when you need to call some function that will
    use the string passed without the usage of paranthesis. But, to use this
    feature the function need to have a template tag.
*/
console.log(person.concat` Malini`);
