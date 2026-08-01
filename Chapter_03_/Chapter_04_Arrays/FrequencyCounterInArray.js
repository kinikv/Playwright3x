const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);
let count = 1;
let output = [];
// Write your solution here
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
        ++count;

    } else {
        output.push(`${arr[i]} appears ${count} times`);
        count = 1;
    }


}

process.stdout.write(output.join(" "));