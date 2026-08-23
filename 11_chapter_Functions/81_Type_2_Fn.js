function greetByName(name) {
    console.log("Greetings, " + name + "!");
}

greetByName("Alice");
greetByName("Bob");
greetByName("Charlie");

let output = greetByName("David");
console.log(output); // undefined, because the function does not return anything