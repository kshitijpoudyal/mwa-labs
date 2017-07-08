/**
 * Created by kcp on 7/4/17.
 */
var express = require('express');
var router = express.Router();

/* GET search listing. */
router.get('/', function(req, res, next) {
    var db = req.db2;
    db.homework8c.find({}).toArray(function (err,data){
        res.render('index', {data});
    });

});

module.exports = router;
