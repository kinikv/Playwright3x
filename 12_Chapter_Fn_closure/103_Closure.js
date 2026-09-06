function openBrowser(){
    console.log("Edge");
    function installEdge(){
        console.log("Installing Edge");

    }
    return installEdge;
}
const runTc=openBrowser();
runTc(); // Installing Edge, because the inner function is called after the outer function has executed