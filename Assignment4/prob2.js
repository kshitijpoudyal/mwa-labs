/**
 * Created by kcp on 6/30/17.
 */
function checkSystem() {
    const os = require('os');
    console.log("Checking your System!");
    if (os.cpus().length < 2) {
        console.log("Processor is not Supported!");
    }
    else if (os.freemem() < 2e+9) {
        console.log("Your System requires atleast 2GB!");
    } else {
        console.log("System is checked successfully");
    }
}
checkSystem();

