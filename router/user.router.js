const express = require('express');
const router = express.Router();
const controler = require ('../controler/user.controler.js')
const validate = require('../controler/user.validate.js')

// router.use(bodyParser.json()) // for parsing routerlication/json
// router.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// router.set('view engine','pug');
// router.set('views','./view');

router.get('/',controler.index);

router.get('/cookie',function(req,res,next){
	res.cookie("user_id","anhtueyeumaithi");
	console.log(req.cookies);
	res.send('HELLO MAI THI');
});

router.get('/delete/:id',controler.delete);

router.get('/search',controler.search);

router.get('/create',controler.getcreate);

router.post("/create",validate.postcreate,controler.postcreate);

router.get('/:id',controler.id);

module.exports = router;