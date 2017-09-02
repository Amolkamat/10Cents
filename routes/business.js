var express = require('express');
var router = express.Router();
var User = require("../models/User.js");

router.post('/create' , function(req,res) {

  console.log(req.body.email);
  var user = {
    email: req.body.email,
    password: req.body.password,
    shop: {
      placeId: req.body.shopPlaceId,
      address: req.body.shopPlaceAddress
    }

  }
customer = new User(user)


  customer.save(function(err, doc) {
    // Log any errors
    if (err) {
      console.log(err);
    }
    // Or log the doc
    else {
      console.log(doc)
        res.json(doc);
    }
  });

})





module.exports = router;