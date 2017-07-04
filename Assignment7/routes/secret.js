/**
 * Created by kcp on 7/3/17.
 */
var express = require('express');
var crypto = require('crypto');
var router = express.Router();

router.get('/',function (req,res,next) {
    var db = req.db;
    db.homework7.findOne({},function (err,item) {
        const decipher = crypto.createDecipher('aes256', 'asaadsaad');
        const encrypted = item.message;
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        res.send(decrypted);
    });

});
module.exports = router;