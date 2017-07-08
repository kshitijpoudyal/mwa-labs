/**
 * Created by kcp on 7/5/17.
 */
/**
 * Created by kcp on 7/5/17.
 */
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.post('/', function(req, res, next) {
    var db = req.db2;
    const name = req.body.name;
    const category = req.body.category;
    const long = parseFloat(req.body.longitude);
    const lat = parseFloat(req.body.latitude);
    console.log(name);
    console.log(category,long,lat);
    db.homework8c.createIndex({coords:'2d'});
    db.homework8c.find({
        $and: [
            {'coords': {$near: [long, lat]}},
            {'name': {$regex: name, $options: 'i'}},
            {'category': {$regex: category, $options: 'i'}}
        ]
    }).limit(3).toArray(function (err, dataArray) {
        console.log(dataArray);
        res.json(dataArray);
    });
});
module.exports = router;