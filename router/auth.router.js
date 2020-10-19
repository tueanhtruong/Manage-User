const express = require('express');
const router = express.Router();
const controler = require ('../controler/auth.controler.js');

router.get('/login',controler.login);

router.post('/login',controler.postlogin);

module.exports = router;
