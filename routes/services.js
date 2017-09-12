var express = require('express');
var router = express.Router();
var User = require("../models/User.js");
var CustomerOrder = require("../models/CustomerOrder");
var moment = require('moment');
var multer  = require('multer')
var excelToJson = require('convert-excel-to-json');
var fs = require('fs');
var upload = multer( { dest: 'uploads/' } );
var XLSX = require('xlsx');
var path = require('path');

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
    CustomerOrder.find({placeId: req.params.id,orderStatus:'Placed'})
                  .sort({createdAt: 'asc'})
                  .exec(function(err, doc){
      if (err)
    {
        res.send(err);
    }
    res.json(doc);
  })



})

router.post('/updateOrder',function(req,res){
    console.log('Update Ordder');
    console.log(req.body);
    CustomerOrder.findOneAndUpdate({_id: req.body.orderId}, {$set:{orderStatus:req.body.orderStatus}}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }
    else {
      res.json(doc);
    }

})
});


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


router.post("/sendMessage", function(req, res) {
  var client = require('twilio')(
    'ACa46cd1c81f2ea7451ad4c51cb0ba19ae',
    'cdd0dc1bc64ca2543671709da54f6bf8'
  );
    console.log(req.body)


  client.messages.create({
    from: "+17028307596",
    to: req.body.phone,
    body: "This is your New Order! " + req.body.orderId ,
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


router.post( '/upload/:placeId',upload.any(), function( req, res, next ) {
  console.log(req.files);
  console.log(req.files[0].filename);
  var filePath = (  __dirname +"/../uploads/"+ req.files[0].filename);

  var result = excelToJson({
    sourceFile: filePath,
    header:{
          rows: 1 // 2, 3, 4, etc.
    },
    columnToKey: {
        A: 'category',
        B: 'item',
        C: 'price'
    }
});


fs.unlinkSync(filePath);

User.update({"placeId":req.params.placeId},{"$set":{menuList:result["Sheet1"]}})
.exec(function(err,doc) {
  if(err)
  {
    console.log(err)
  }
  else {
    console.log(doc);
  }
  res.send(doc);

})

});


module.exports = router;
