/*
    Numerical dates and times

    In JavaScript, you can use the Date class to create Date
    objects to manipulate and represent dates and times.

    However, it's possible to use Date objects to return a
    numerical value that can be used to represent dates and
    times since January 1st, 1970.

    Below, you'll see some demonstrations about this feature.
*/
console.log(Date.now());

let date = new Date();

console.log(date.getTime());
