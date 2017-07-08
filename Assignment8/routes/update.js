/**
 * Created by kcp on 7/5/17.
 */
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

/* GET home page. */
router.post('/', function(req, res, next) {
    var db = req.db2;
    console.log("inside update id is:")
    console.log(req.body._id);
    var _id = req.body._id;
    var name = req.body.nameUpdate;
    var category = req.body.categoryUpdate;
    var longititude = parseFloat(req.body.longitudeUpdate);
    var latititude = parseFloat(req.body.latitudeUpdate);
    db.homework8c.update({'_id':ObjectId(_id)},{ $set:
        {
            name: name,
            category: category,
            coords:[longititude, latititude]

        }
    });

    db.homework8c.find({}).toArray(function (err,data){
        res.render('index', {data});
    });
});
module.exports = router;