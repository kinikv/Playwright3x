function doubleIt(num) {
    return num * 2;
}

const doubleItArrow = (num) => num * 2;

console.log(doubleIt(5));
console.log(doubleItArrow(10));

function getEnvironment() {
    console.log("The current environment is staging.");
}
const getEnvironmentArrow = () => "Staging";
console.log(getEnvironmentArrow());

getEnvironment();
getEnvironmentArrow();