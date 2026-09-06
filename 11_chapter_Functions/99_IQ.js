var a ="Pramod";
if(true){
    console.log(a); // Pramod, because the variable is accessible within the block
    var a="Kumar";
    console.log(a); // Kumar, because the variable is re-declared and updated within the block
}