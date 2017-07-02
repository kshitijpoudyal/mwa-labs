var express = require('express');
var fetch = require('node-fetch');
var Rx = require('@reactivex/rxjs');
var router = express.Router();
var dataAll={};

/* GET users listing. */
router.get('/', function(req, res, next) {
    const url = "http://jsonplaceholder.typicode.com/users/";
    const promiseUrl1 = fetch(url);
    const promiseUrl2 = fetch(url);
    const promiseUrl3 = fetch(url);
    //using promise
    promiseUrl1.then(data => data.json())
        .then(data=> {
            dataAll.promiseData=data;
            observable();
        })
        .catch((err)=>console.error(err));

    //using reactive programming
    function observable() {
        //using observable for a promise
        const source = Rx.Observable.fromPromise(promiseUrl2);
        source.subscribe(observableNext,err=>{
            console.log(err);
        });
        //next function for observable

        function observableNext(response) {
                const source2 = Rx.Observable.fromPromise(response.json());
                source2.subscribe(data=>{
                    dataAll.observableData = data;
                    asyncAwait();
                }, err=>{
                    console.log(err);
                });
        }
    }

    //using async await
    async function asyncAwait() {
        try{
            const dataPromise = await promiseUrl3;
            const data = await dataPromise.json();
            dataAll.asyncAwaitData = data;
            res.render('users', { users: dataAll});

        }catch (error){
            console.error(error);
        }

    }

});

module.exports = router;
