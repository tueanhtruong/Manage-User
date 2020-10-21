const express = require('express');
const router = express.Router();
const controler = require ('../controler/user.controler.js')
const validate = require('../controler/user.validate.js')
var multer  = require('multer')
var upload = multer({ dest: './public/uploads/' })

router.get('/',controler.index);

router.get('/cookie',function(req,res,next){
	res.cookie("user_id","anhtueyeumaithi");
	console.log(req.cookies);
	res.send('HELLO MAI THI');
});

router.get('/delete/:id',controler.delete);

router.get('/search',controler.search);

router.get('/create',controler.getcreate);

router.post("/create",upload.single('avatar'),validate.postcreate,controler.postcreate);

router.get('/:id',controler.id);

module.exports = router;