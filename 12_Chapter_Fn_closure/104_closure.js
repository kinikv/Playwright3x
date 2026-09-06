function makeCounter(start=0){
    let count=start;
    return{
        increment(){count++},
        decrement(){count--},
        getCount(){return count}    
    }
}
let counter1=makeCounter(0);
counter1.increment();
counter1.increment();
console.log(counter1.getCount()); // 2, because the counter has been incremented twice
counter1.decrement();
console.log(counter1.getCount()); // 1, because the counter has been decremented once