var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  db = req.db;
    //1
    db.zips.aggregate([
            {$match: {state:"IA"}},
            {$project: {
                    _id:1
                }
            }
    ],function (err,data) {
        //console.log(data);
    });

    //2
    db.zips.aggregate([
        {$match: {pop:{$lt:1000}}},
        {$project: {
                _id:1
            }
        }
    ],function (err,data) {
        //console.log(data);
    });

    //3
    db.zips.aggregate([
        {$group:{
                _id:{city:'$city',state:'state'},
                zipcodeCounter:{$sum:1}
            }
        },
        {
            $match:{
                zipcodeCounter:{$gt:1}
            }
        },
        {
            $sort:{
                '_id.state':1,
                '_id.city':1
            }
        }
    ],function (err,data) {
        //console.log(data);
    });

    //4
    db.zips.aggregate([
        {$group:{
                '_id':{state:'$state','city': '$city'},
                'minPopulation':{$min:'$pop'}
            }
        },
        {
            $project:{
                city:'$_id.city',
                pop:'$minPopulation'
            }
        }
    ],function (err,data) {
        console.log(data);
    });

  res.send('respond with a resource');
});

module.exports = router;
