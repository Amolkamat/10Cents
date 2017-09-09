// Require Mongoose
var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);
var bcrypt = require('bcryptjs');

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
  	},
    menuList: [{
      category: {
        type:String
      },
      item: {
        type: String} ,
      price: {
        type: Float}
    }]

});

UserSchema.pre("save", function(next) {
	var user = this

  bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
          user.password = hash;
          next();
          })
      })
  })


// Create the Article model with Mongoose
var User = mongoose.model('User', UserSchema);

// Export the Model
module.exports = User;
