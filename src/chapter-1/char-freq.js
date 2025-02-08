/*
    Class DefaultMap to create an object DefaultMap. This object is responsible to map the 
    characters found in the plain text file given in your shell.
*/
class DefaultMap extends Map    {
    constructor(defaultValue)   {
        super();
        this.defaultValue = defaultValue;
    }

    get(key)    {
        if (this.has(key))  {
            return super.get(key);
        }   else    {
            return this.defaultValue;
        }
    }
}

/*
    Class Histogram to create an object Histogram. This object is responsible to use an
    DefaultMap object and contain the necessary operations to make the histogram that will
    be printed to user in the standard output of your computer.
*/
class Histogram {
    constructor()   {
        this.letterCounts = new DefaultMap(0);
        this.totalLetters = 0;
    }

    add(text)   {
        text = text.replace(/\s/g , "").toUpperCase();

        for (let character of text) {
            let count = this.letterCounts.get(character);
            this.letterCounts.set(character, count + 1);
            this.totalLetters++;
        }
    }

    toString()  {
        let entries = [...this.letterCounts];
        
        entries.sort((a, b) => {
            if (a[1] === b[1])  {
                return a[0] < b[0] ? -1 : 1;
            }   else    {
                return b[1] - a[1];
            }
        });

        for (let entry of entries)  {
            entry[1] = entry[1] / this.totalLetters * 100;
        }

        entries = entries.filter(entry => entry[1] >= 1);

        let lines = entries.map(
            ([l, n]) => `${l}: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );

        return lines.join("\n");
    } 
}

/*
    Function created to set the encode standard used by standard input and use the
    Histogram class to create the Histogram object to make the necessary operation
    to make the histogram that will be displayed in the stardard output. This process
    is controlled by the for loop. Right after the end of this iteration, the function
    returns the Histogram object with a prepared histogram.
*/
async function histogramFromStdin ()    {
    process.stdin.setEncoding("utf-8");
    let histogram = new Histogram();

    for await (let chunk of process.stdin)  {
        histogram.add(chunk);
    }

    return histogram;
}

// Function call to use the algorithm
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });