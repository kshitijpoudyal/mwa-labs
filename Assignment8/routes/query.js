/**
 * Created by kcp on 7/4/17.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var db = req.db;

    //return all documents in a collection
    //1
    db.restaurants.find({}).each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });
    //2
    db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //3
    db.restaurants.find({},{restaurant_id:1,name:1,district:1,cuisine:1,_id:0}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });
    //4
    db.restaurants.find({},{restaurant_id:1,name:1,district:1,'address.zipcode':1,_id:0}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //5
    db.restaurants.find({district:'Bronx'}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //6
    db.restaurants.find({district:'Bronx'}).limit(5).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //7
    db.restaurants.find({district:'Bronx'}).skip(5).limit(5).each(function (err,data) {
        if(!data)
            next();
       // else console.log(data);
    });

    //8
    db.restaurants.find({
        'address.coord.0':{$lt:-95.754168}
    }).each(function (err,data) {
        if(!data)
            next();
       // else console.log(data);
    });

    //9
    db.restaurants.find(
        {
            $and: [
                    {cuisine:{$ne:'American'}},
                    {'grades.score':{$gt:70}},
                    {'address.coord.0':{$lt:-65.754168}}
                ]
        }).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //10
    db.restaurants.find({name:{$regex:'^Wil'}},{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //11
    db.restaurants.find({name:{$regex:'ces$'}},{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

    //12
    db.restaurants.find({name:{$regex:'(Reg)'}},{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });

    //13
    db.restaurants.find(
        {
            $and: [
                {district: 'Bronx'},
                {cuisine: {$in:['Chinese',"American "]}}
                ]
        }).each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });

    //14
    db.restaurants.find({
        district: {$in:['Staten Island','Queens','Bronx','Brooklyn']}}
        ,{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });

    //15
    db.restaurants.find({
        district:{$nin:['Staten Island','Queens','Bronx','Brooklyn']}
    },{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data) next();
        else console.log(data);
    });

    //16
    db.restaurants.find(
        {'grades.score': {$lte:10}}
        ,{restaurant_id:1,name:1,district:1,cuisine:1}).each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });

    //17
    db.restaurants.find({
        'address.coord.1':{$gt:42,$lte:52}
    },{restaurant_id:1,name:1,address:1}).each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });

    //18
    db.restaurants.find({},{name:1,_id:0})
        .sort({name:1})
    .each(function (err,data) {
        if(!data) next();
        //else console.log(data);
    });
    //19
    db.restaurants.find({},{name:1,_id:0})
        .sort({name:-1})
        .each(function (err,data) {
            if(!data) next();
            //else console.log(data);
        });

    //20
    db.restaurants.find({})
        .sort({cuisine:1,district:-1})
        .each(function (err,data) {
            if(!data) next();
            //else console.log(data);
        });
    //21
    db.restaurants.find({
        'address.street':{$exists:false}
    }).each(function (err,data) {
        if(!data) next();
        // else{
        //     console.log("Does not have street");
        //     console.log(data);
        // }
    });

    //22
    db.restaurants.find({
        'address.coord':{$type:'double'}
    }).each(function (err,data) {
        if(!data) next();
        // else{
        //     console.log(data);
        // }
    });

    //23
    db.restaurants.find({name:{$regex:'^Mad'}},{name:1,district:1,'address.coord.0':1,'address.coord.1':1,cuisine:1}).each(function (err,data) {
        if(!data)
            next();
        //else console.log(data);
    });

});

module.exports = router;
