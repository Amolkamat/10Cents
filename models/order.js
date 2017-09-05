// Require Mongoose
var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var OrderSchema = new Schema({

  placeId: {
      type: String
    },
    orderList: [{
      id: {
        type:Number
      },
      name: {
        type: String} ,
      quantity: {
        type: String
      },
      price: {
        type: Float}
    }]


});


// Create the Article model with Mongoose
var Order = mongoose.model('Order', OrderSchema);

// Export the Model
module.exports = Order;
