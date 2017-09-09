var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
var bcrypt = require('bcrypt-nodejs');

router.post('/create' , function(req,res) {

  console.log(req.body.email);

  var userAuthentication = {

  }

  User.findOne({email: req.body.email})
    .exec(function(err,user) {
      if(user)
      {
        userAuthentication['success'] = false;
        res.json(userAuthentication)

      } else {
        console.log('Creating an user!');
        var user = {
          email: req.body.email,
          password: req.body.password,
          placeId: req.body.shopPlaceId,
          address: req.body.shopPlaceAddress

        }
        var customer = new User(user)
        customer.save(function(err, doc) {
          // Log any errors
          if (err) {
            console.error(err)
            userAuthentication['success'] = false;
            res.json(userAuthentication)
          } else {
            console.log('Inside Success!');
            userAuthentication['success'] = true;
            userAuthentication['user'] = doc;
            res.json(userAuthentication);
          }
        });

      }

    })


})




module.exports = router;
