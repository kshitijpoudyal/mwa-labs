/**
 * Created by kcp on 6/28/17.
 */
let EvenEitter = require('events');

class Clock extends EvenEitter{
    constructor(){
        super();
        let self = this;
        setInterval(function () {
            self.emit('tick');
        },1000);
    }
}

let object = new Clock();
object.on('tick',function () {
    console.log("wo0ho0");
});
