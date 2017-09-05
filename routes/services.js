var express = require('express');

var Order = require('../models/Order.js');

var router = express.Router();

router.post('/createOrder/:id' , function(req,res) {
  console.log(req.params.id);
  console.log('Customer Order');
  console.log(req.body);
  var order = {
    placeId: req.params.id,
    orderList: req.body


  }
customerOrder = new Order(order)

  customerOrder.save(function(err, doc) {
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
