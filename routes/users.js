var express = require('express');
var router = express.Router();
var {store,show,destroy}=require("../controller/userController")

router.post('/', store);
router.get("/:id",show)
router.delete("/:id",destroy)


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
