function getGreeting(name) {
    return `Hello, ${name}!`;
}

console.log(getGreeting("Alice")); // "Hello, Alice!", because the function returns a value

(function(){
    console.log("Staging");
})(); // Immediately Invoked Function Expression (IIFE) that logs "Staging"

(()=>{
    console.log("Production");
})(); // Immediately Invoked Function Expression (IIFE) that logs "Production"