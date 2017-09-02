// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV === 'production') {
var MONGODB = "mongodb://heroku_pp0xjzqd:4emv3h0q3itv7ct7ij9rabjhn8@ds159013.mlab.com:59013/heroku_pp0xjzqd";
}
else {
var MONGODB = "mongodb://localhost/hwNYTScrape";
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
app.get("/api/sendMessage", function(req, res) {
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


var business = require('./routes/business');
var services = require('./routes/services');
var shops = require('./routes/shops');

app.use('/business', business);
app.use('/shops', shops);
app.use('/services', services);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
