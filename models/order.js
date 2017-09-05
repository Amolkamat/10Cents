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

if (process.env.NODE_ENV === 'production') {
var MONGODB = "mongodb://heroku_zn08v06c:ahf4lhkmnd46o4ip0mf3erq74j@ds123124.mlab.com:23124/heroku_zn08v06c";
}
else {
var MONGODB = "mongodb://localhost/tenCents";
}
mongoose.connect(MONGODB);
autoIncrement.initialize(mongoose.connection);
OrderSchema.plugin(autoIncrement.plugin, 'Order');
// Create the Article model with Mongoose
var Order = mongoose.model('Order', OrderSchema);

// Export the Model
module.exports = Order;
