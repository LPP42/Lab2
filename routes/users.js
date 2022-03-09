var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:whatever', function(req, res, next) {

   res.render('users', {'whatever':req.params.whatever});

});

module.exports = router;
