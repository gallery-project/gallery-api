var express = require('express');
var router = express.Router();
var {store,show,destroy,index,update}=require("../controller/userController")

router.post('/', store);
router.get("/:id",show)
router.delete("/:id",destroy)
router.get("/",index)
router.put("/:id",update)


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;
