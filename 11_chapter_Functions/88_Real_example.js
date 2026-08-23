function getResponseCode(statusCode) {
    if (statusCode >= 200 && statusCode < 300) {
        return "PASS - OK: Request successful";
    }
}

const getResponseCode1=function(statusCode1){
    if (statusCode1 >= 200 && statusCode1 < 300) {
        return "PASS - OK: Request successful";
    }   
}

const getResponseCode2=(statusCode2)=>{
    if (statusCode2 >= 200 && statusCode2 < 300) {
        return "PASS - OK: Request successful";
    }
}

console.log(getResponseCode(200));
console.log(getResponseCode1(200));
console.log(getResponseCode2(200));  