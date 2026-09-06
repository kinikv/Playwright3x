function add(a,b,c){
    return a+b+c;
}
let num=[1,2,3];
console.log(add(...num));

function hasErrorCode(...codes){
    return codes.some(code => code>400);

}

let errorCodes=[200,300,404];
console.log(hasErrorCode(...errorCodes));