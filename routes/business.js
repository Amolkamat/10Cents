var express = require('express');
var router = express.Router();

router.get('/create' , function(req,res) {
	res.send({
    hello:'Ila'
  })

})





module.exports = router;
