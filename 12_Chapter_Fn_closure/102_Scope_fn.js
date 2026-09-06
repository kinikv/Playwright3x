/*let env="Staging";
function checkCode(){
let timeOut=1000;
console.log('env->',env);
console.log('timeOut->',timeOut);
}
checkCode();
console.log('env->',env);
//console.log('timeOut->',timeOut); // ReferenceError: timeOut is not defined*/

function outterDemo(){
    let x=10;
    function innerDemo(){
        let y=20;
        console.log('x->',x);
        console.log('y->',y);
    }
    console.log('x->',x);
    //console.log('y->',y); // ReferenceError: y is not defined
    innerDemo();
}

const greet=outterDemo();
console.log('greet->',greet); // undefined, because the function does not return anything

