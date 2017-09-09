// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var multer  = require('multer')
var excelToJson = require('convert-excel-to-json');
var fs = require('fs');
var User = require("./models/User.js");


var upload = multer( { dest: 'uploads/' } );
var XLSX = require('xlsx');
// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;
var autoIncrement = require('mongoose-auto-increment');

if (process.env.NODE_ENV === 'production') {
var MONGODB = "mongodb://heroku_zn08v06c:ahf4lhkmnd46o4ip0mf3erq74j@ds123124.mlab.com:23124/heroku_zn08v06c";
}
else {
var MONGODB = "mongodb://localhost/tenCents";
}



// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect(MONGODB);
var db = mongoose.connection;

autoIncrement.initialize(mongoose.connection);


db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered



app.post( '/upload/:placeId',upload.any(), function( req, res, next ) {
  console.log(req.files);
  console.log(req.files[0].filename);
  var filePath = (__dirname +"/uploads/"+ req.files[0].filename);

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


var business = require('./routes/business');
var services = require('./routes/services');
var users = require('./routes/users')
app.use('/business', business);
app.use('/services', services);
app.use('/users',users)



// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
