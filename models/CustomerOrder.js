// Require Mongoose
var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
var autoIncrement = require('mongoose-auto-increment');
// Create a Schema Class
var Schema = mongoose.Schema;


var CustomerOrderSchema = new Schema({

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
    }],
    orderStatus : {
      type: String,
      default: 'Placed'
    }


},{timestamps: true });
autoIncrement.initialize(mongoose.connection);
CustomerOrderSchema.plugin(autoIncrement.plugin, 'CustomerOrder');
// Create the Article model with Mongoose
var CustomerOrder = mongoose.model('CustomerOrder', CustomerOrderSchema);

// Export the Model
module.exports = CustomerOrder;
