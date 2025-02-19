/*
    Null and undefined

    Null and undefined are types of values created to represent absence
    of value.
    
    Originally, undefined was designed to be used when you don't
    initialize a variable with some value or object. Also, if you try to
    receive an array element at a specified index or an object property
    doesn't exist, undefined will be returned.
    
    Originally, null was designed to be used when you want to indicate
    the absence of memory reference to a value or object.

    You can use null and undefined without restrictions in your source
    codes, but it's better to avoid the usage of undefined in your
    algorithms. Because of the expanded range of meaning from undefined,
    if you want to represent absence of value, it's better to use null
    this purpose.
*/
let a;
let b = [23n, 41n, -13566223n];
let c = {
    name : "Joaquim",
    age : 28,
    sex : 'M'
};
console.log(a);
console.log(b[3]);
console.log((c.father) + '\n');

/*
    Equality between null and undefined

    If you try to compare null and undefined with an equality operator,
    JavaScript will return true. Also, if you try to compare these values
    with an strict equality operator, JavaScript will return false.
*/
console.log(null == undefined);
console.log(null === undefined);
