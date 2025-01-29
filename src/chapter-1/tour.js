function main ()    {
    // Introduction to simple variables
    let a;

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
    let points = [
        {x : 2, y : 10},
        {x : -12, y : -2}
    ];

    let data = {
        trial1 : [[1, 2], [3, 4]],
        trial2 : [[2, 3], [4, 5]]
    };

    console.log(points);
    console.log(data.trial2);
    console.log(data.trial2 + '\n');

    // Operands and operators
    console.log(3 + 2);
    console.log(3 - 2);
    console.log(3 * 2);
    console.log((3 / 2) + '\n');

    console.log('3' + '2' + '\n');

    console.log((points[1].x - points[0].x) + '\n');
    
    let count = 0;
    console.log(count++);
    console.log(++count);
    console.log(count--);
    console.log((--count) + '\n');

    let b = 2, c = 3;

    console.log(b < c);
    console.log(b <= c);
    console.log(b >= c);
    console.log(b > c);
    console.log(b === c);
    console.log((b !== c) + '\n');

    console.log(!(b < c));
    console.log(!(b <= c));
    console.log(!(b >= c));
    console.log(!(b > c));
    console.log(!(b === c));
    console.log((! (b !== c)) + '\n');

    console.log("two" === "three");
    console.log("two" > "three");
    console.log((false === (b === c)) + '\n');

    console.log((b === 2) && (c === 3));
    console.log((b > 3) || (c < 3));
    console.log((!(b === c)) + '\n');

    // Introduction to functions

    function addOne (x) {
        return x + 1;
    }

    b = addOne(b);
    console.log(b + '\n');

    const square = function (x)   {
        return x * x;
    };

    c = square(c);
    console.log(c + '\n');

    const addTwo = x => x + 2;
    const cube = x => x * x * x;

    b = addTwo(c);
    console.log(b + '\n');

    c = cube(b);
    console.log(c + '\n');

    let vector = [];
    vector.push(12, 24, 36);
    console.log(vector);
    vector.reverse();
    console.log(vector + '\n');

    points.dist = function ()   {
        let p1 = this[0];
        let p2 = this[1];
        let e = p2.x - p1.x;
        let f = p2.y - p1.y;

        return Math.sqrt((e * e) + (f * f));
    }

    console.log(points.dist() + '\n');

    function abs (x)    {
        if (x >= 0) {
            return x;
        }   else    {
            return -x;
        }
    }

    console.log((abs(4) === abs(-4)) + '\n');

    function sumOfValues (vector)   {
        let sum = 0;
        for (let x of vector)   {
            sum += x;
        }

        return sum;
    }

    let values = [1, 2, 3, 4, 5, 6];

    console.log(sumOfValues(values) + '\n');

    function factorial (x)  {
        if (x === 0 ^ x === 1)  {
            return 1;
        }   else    {
            let aux = x - 1;
            while (aux >= 2)    {
                x *= aux--;
            }

            return x;
        }
    }

    console.log(factorial(5));

    function factorialAlt (x)   {
        if (x === 0 ^ x === 1)  {
            return 1;
        }   else    {
            for (let aux = x - 1; aux >= 2; aux--)  {
                x *= aux;
            }

            return x;
        }
    }

    console.log(factorialAlt(0) + '\n');

    class Points    {
        constructor (x, y)  {
            this.x = x;
            this.y = y;
        }
        distance () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }

    let dots = new Points (34, -65);

    console.log(dots);
    console.log(dots.distance() + '\n');
}

main();