function main ()    {
    // Introduction to simple variables
    let a, b, c;

    a = 10;
    console.log(a);
    a = -10;
    console.log(a);
    a = 3.14;
    console.log(a);
    a = -3.14;
    console.log(a);
    a = true;
    console.log(a);
    a = false;
    console.log(a);
    a = 'a';
    console.log(a);
    a = "JavaScript";
    console.log(a);
    a = null;
    console.log(a);
    a = undefined;
    console.log(a + '\n');

    // Introduction to objects
    let book = {
        topic : "JavaScript",
        edition : 7
    };

    console.log(book.topic);
    console.log(book["edition"]);
    book.author = "Flanagan";
    console.log(book["author"]);
    book.contents = {};
    console.log(book["contents"]);
    console.log(book.contents?.ch01?.sect1 + '\n');

    // Introduction to arrays
    let primes = [2, 3, 5, 7];
    console.log(primes);
    console.log(primes.length);
    console.log(primes[0]);
    console.log(primes[1]);
    console.log(primes[2]);
    console.log(primes[3]);
    console.log(primes[primes.length]);
    console.log(primes[primes.length - 1]);
    console.log(primes[primes.length - 2]);
    console.log(primes[primes.length - 3]);
    console.log(primes[primes.length - 4]);
    primes[4] = 9;
    console.log(primes);
    console.log(primes[4]);
    primes[4] = 11;
    console.log(primes);
    console.log(primes[4]);
    let empty = [];
    console.log(empty);
    console.log(empty.length + '\n');

    // Simple usage of arrays and objects

    a = 123;
    b = 27;

    c = a + b;
    console.log(c);
    c = a - b;
    console.log(c);
    c = a * b;
    console.log(c);
    c = a / b;
    console.log(c);
    
    c = 0;
    console.log(c++);
    console.log(++c);
    console.log(c--);
    console.log(--c);
}

main();