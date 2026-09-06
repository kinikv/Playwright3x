function maxRetryTracker(max){
    let attempts=0;
    function tryAgain(testName){
        attempts++;
        if(attempts>max){
            console.log(`Test ${testName} exceeded Attempts ${attempts}`);
        }
        return `Attempts: ${attempts}/${max} for ${testName}`;
    
    }
    return tryAgain;
}

let runTest=maxRetryTracker(3);
console.log(runTest("Login Test")); // Attempts: 1/3 for Login Test
console.log(runTest("Login Test")); // Attempts: 2/3 for Login Test
console.log(runTest("Login Test")); // Test Login Test exceeded Attempts 3
console.log(runTest("Login Test")); // Test Login Test exceeded Attempts 4
