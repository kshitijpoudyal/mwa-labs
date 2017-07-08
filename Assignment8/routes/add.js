/**
 * Created by kcp on 7/4/17.
 */
var express = require('express');
var router = express.Router();

/* GET search listing. */
router.post('/', function(req, res, next) {
    var db = req.db2;
    var name = req.body.name;
    var category = req.body.category;
    var lat = parseFloat(req.body.lat);
    var long = parseFloat(req.body.long);
    db.homework8c.insert({'name':name,'category':category,coords:[long,lat]},function (err,data) {
        if(err) throw err;
        console.log("inserted");
        console.log(data);
    });
    db.homework8c.find({}).toArray(function (err,data){
        res.render('index', {data});
    });
});

module.exports = router;
