/**
 * Created by kcp on 7/4/17.
 */
var express = require('express');
var router = express.Router();

/* GET search listing. */
router.get('/', function(req, res, next) {
    var db = req.db2;
    db.homework8c.find({}).toArray(function (err,data){
        res.render('locationAdd', {data});
    });

});

router.post('/', function(req, res, next) {
    var db = req.db2;
    var name = req.body.name;
    var category = req.body.category;
    var lat = req.body.lat;
    var long = req.body.long;
    db.homework8c.insert({'name':name,'category':category,'long':long,'lat':lat},function (err,data) {
        if(err) throw err;
        console.log("inserted");
        console.log(data);
    });
    db.homework8c.find({}).toArray(function (err,data){
        res.render('locationAdd', {data});
    });
});

module.exports = router;
