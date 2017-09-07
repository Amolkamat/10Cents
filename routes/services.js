var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
var CustomerOrder = require("../models/CustomerOrder");
var moment = require('moment');

router.post('/createOrder/:id' , function(req,res) {

  var order = {
    placeId: req.params.id,
    orderList: req.body

  }
customerOrder = new CustomerOrder(order)

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

router.get('/fetchOrders/:id',function(req,res){
  if(!req.params.startDate) {
      var startDate = moment().startOf('day')
      console.log(startDate.toDate())
  }
    CustomerOrder.find({placeId: req.params.id,createdAt: {$gte: startDate.toDate()}})
                  .sort({createdAt: 'desc'})
                  .exec(function(err, doc){
      if (err)
    {
        res.send(err);
    }
    res.json(doc);
  })



})

router.get('/validateShop/:id',function(req,res){
  console.log('Shop Validation')
  if(!req.params.startDate) {
      var startDate = moment().startOf('day')
      console.log(startDate.toDate())
  }
    User.find({placeId: req.params.id}, function(err,doc) {
      if(err) {
        res.send(err);
      } else {
        res.json(doc)
      }
    })

})


router.get("/api/sendMessage", function(req, res) {
  var client = require('twilio')(
    'ACa46cd1c81f2ea7451ad4c51cb0ba19ae',
    'cdd0dc1bc64ca2543671709da54f6bf8'
  );

  client.messages.create({
    from: "+17028307596",
    to: "+17022414768",
    body: "This is your New Order!",
}, function(err, message) {
  if(err){
    console.log(err);
    res.send({error:'error'});
  } else {
    console.log(message.sid);
    res.send({success:message.sid})
  }
});

});


module.exports = router;
