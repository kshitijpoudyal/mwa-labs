/**
 * Created by kcp on 7/5/17.
 */
var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();

router.post('/', function(req, res, next) {
    var db = req.db2;
    var data = req.body.deleteSelect;

    // var name = [];
    //
    // if(data.constructor === Array) {
    //     name = data;
    // } else {
    //     name.push(data);
    // }

    name.forEach(function (data) {
        db.homework8c.remove({'_id':ObjectId(data)});
    });

    db.homework8c.find({}).toArray(function (err,data){
        res.render('index', {data});
    });
});

module.exports = router;
