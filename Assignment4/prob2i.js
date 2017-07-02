/**
 * Created by kcp on 6/30/17.
 */
function checkSystem() {
    const os = require('os');
    const Rx = require('@reactivex/rxjs');

    const source = Rx.Observable.create(function (observer) {
        observer.next("Checking your system!");
        if (os.cpus().length < 2) {
            observer.next("Processor is not Supported!");
        }
        else if (os.freemem() < 2e+9) {
            observer.next("Your System requires at least 2GB!");
        } else {
            observer.next("System is checked successfully");
        }
    });

    const subscription = source.subscribe(function (x) {
        console.log(x);
    }, function (err) {
        console.error(err);
    }, function (x) {
        console.info(x);
    });
}

checkSystem();