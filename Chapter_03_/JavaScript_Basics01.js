const input = parseInt(require('fs').readFileSync(0, "utf8").trim(), 10);
let answer="";
function questionName(input) {

    switch (input) {
        case 200:
            return "PASS - OK: Request successful";
        case 201:
            return "PASS - Created: Resource created successfully";
        case 301:
            return "WARNING - Moved Permanently: URL has changed";
        case 400:
            return "FAIL - Bad Request: Check request payload";
        case 401:
            return "FAIL - Unauthorized: Check auth token";
        case 403:
            return "FAIL - Forbidden: Insufficient permissions";
        case 404:
            return "FAIL - Not Found: Check endpoint URL";
        case 500:
            return "FAIL - Internal Server Error: Backend issue";
        default:
            return "UNKNOWN - Unhandled status code";
    }
}

console.log(questionName(answer));