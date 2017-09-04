// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var UserSchema = new Schema({

  email: {
  		type: String
  	},
  	password: {
  		type: String
  	},
    name: {
  		type: String
  	},

  placeId: {
      type: String
    },
  address: {
  		type: String
  	}

});

// Create the Article model with Mongoose
var User = mongoose.model('User', UserSchema);

// Export the Model
module.exports = User;
