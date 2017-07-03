/**
 * Created by kcp on 7/3/17.
 */
var express = require('express');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var csrf = require('csurf');
var validator = require('express-validator');
var router = express.Router();

router.use(session({
    secret: 'session_secretOIFHDLKSJFKHBILHRY&I'
}));

router.use(bodyParser.urlencoded({extended: true}));
router.use(csrf());
router.use(validator());

router.use(function (request, response, next) {
    response.locals.csrftoken = request.csrfToken();
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('newsletter',{title:'Newsletter',csrftoken:req.csrfToken()});
});
router.post('/', function(req, res, next) {
    req.assert('email','Invalid Email Address').notEmpty().isEmail();
    var errors = req.validationErrors();
    var userEmail = req.body.email;

    if(!errors){
        userEmail = userEmail+"\n";
        fs.appendFileSync(path.join(__dirname,"/subscribers.txt"),userEmail);
        res.render('thankyou',{title:'Subscribed', email:userEmail});
    }else {
        res.render('newsletter',{title:'Newsletter',csrftoken:req.csrfToken(), error:errors[0].msg});
    }

});
module.exports = router;
