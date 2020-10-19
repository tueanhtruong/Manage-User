const md5 = require('md5');
const db = require('../db.js');

module.exports = {
	login : function(req,res){
		res.render('auth');
	},
	postlogin : function(req,res){
		var email = req.body.email;
		var pass = md5(req.body.pass);

		var user = db.get("users").find({email:email}).value();
		if(!user){
			res.render('auth',{
				errors:['User name does not exist'],
				values:req.body
			});
			return;
		}
		if(pass!==user.password){
			res.render('auth',{
				errors:['Password is not correct'],
				values:req.body
			});
			return;
		}
		res.cookie("UserID",user.id);
		res.redirect('/user');
	}
};