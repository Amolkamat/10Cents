// Require Mongoose
var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
var autoIncrement = require('mongoose-auto-increment');
// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var OrderSchema = new Schema({

  id: {
  		type: Number
  	},

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

autoIncrement.initialize(mongoose.connection);
OrderSchema.plugin(autoIncrement.plugin, 'Order');
// Create the Article model with Mongoose
var Order = mongoose.model('Order', OrderSchema);

// Export the Model
module.exports = Order;
