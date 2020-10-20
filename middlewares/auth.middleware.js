const db = require('../db.js');
module.exports = {
	requireAuth : function(req,res, next){
		if(!req.signedCookies.UserID) {
			res.redirect('/auth/login');
			return;
		}
		var user = db.get('users').find({id:req.signedCookies.UserID}).value();
		if(!user){
			res.redirect('/auth/login',{
				errors:['You must login to access']
			});
			return;
		}
		res.locals.user = user;
		next();
	}
};