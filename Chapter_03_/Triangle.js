const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here
let sides = data.trim().split("").map(Number);
let s1 = sides[0];
let s2 = sides[1];
let s3 = sides[2];

if (s1 = s2= s3) {
    console.log("Equilateral");
}
else if (s1 == s2 && s2 != s3) {
    console.log("Isoceles");

}
else {
    console.log("Scalene");
}