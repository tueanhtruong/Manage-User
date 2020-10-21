module.exports.postcreate = (req,res,next)=>{
	let errors= [];
	if(!req.body.name||/[^a-z\s]/i.test(req.body.name)) {
		errors.push("Name is required the characters");
	}
	if(!req.body.age||/[\D]/.test(req.body.age)){
		errors.push("Age is required the numbers");
	}
	if(!req.body.email){
		errors.push("Email is required");
	}
	if(!req.body.password||/[\D]/.test(req.body.age)){
		errors.push("Password is required");
	}
	if(errors.length){
		res.render('view3',{
			errors:errors,
			values:req.body
		});
		return;
	}
	req.body.name = req.body.name.trim();
	next();
}