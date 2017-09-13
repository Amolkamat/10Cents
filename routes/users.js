var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
var bcrypt = require('bcryptjs');
var  jwt =  require('jsonwebtoken');
var  config = require('../config') ;


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
          address: req.body.shopPlaceAddress,
          phone: req.body.phone,
          name:req.body.name
        }
        var customer = new User(user)
        customer.save(function(err, doc) {
          // Log any errors
          if (err) {
            console.error(err)
            userAuthentication['success'] = false;
            res.json(userAuthentication)
          } else {


            userAuthentication['success'] = true;
            userAuthentication['user'] = doc;
            res.json(userAuthentication);
          }
        });

      }

    })


})


router.post('/authenticate' , function(req,res) {

  console.log(req.body.email);

  console.log('Inside Authentication');

  var userAuthentication = {

  }

  User.findOne({email: req.body.email})
    .exec(function(err,user) {
      if(user)
      {
        console.log('Inside User')
        userAuthentication['success'] = false;
        bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
            if(err) throw err;
            if(isMatch){
              console.log('Hey its a match');
              userAuthentication['success'] = true;
              userAuthentication['user'] = user;

              console.log('Inside Success!');
              console.log(user);
              
              var token = jwt.sign({
                id: user._id,
                email: user.email,
                address:user.address,
                placeId: user.placeId
              }, config.jwtSecret);
              console.log('JWT token:' + token);
              userAuthentication['token'] = token;

              res.json(userAuthentication);
            } else {
              console.log('Login Failure !');
              userAuthentication['success'] = false;

              res.json(userAuthentication);
            }
        });



      } else {
        console.log('Login Failure');
        userAuthentication['success'] = false;
        res.json(userAuthentication);
      }
  });

})


module.exports = router;
