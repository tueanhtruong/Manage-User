const db = require('../db.js');
const shortid= require('shortid');

module.exports = {
	"index": function (req,res) {
	res.render('view2',{
		users : db.get("users").value()
	});
},
	"delete": function (req,res){
	var id = req.params.id;
	var user = db.get('users').value();
	var index = 0;
	user.forEach((n,i)=>{
		if(n.id==id) index = i;
	});
	db.get('users').splice(index,1).write();
	res.redirect('/user');
},
	"search": function (req,res){
	var q = req.query.q;
	var result = db.get('users').value().filter((user)=>{
		return user.name.toLowerCase().indexOf(q.toLowerCase())!== -1;
	});
	res.render('view2',{users:result});
},
	"getcreate": function (req,res){
	console.log("view3");
	res.render('view3');
},
	"postcreate": function (req,res){
	req.body.id= shortid.generate();
	db.get("users").push(req.body).write();
	res.redirect('/user');
},
	"id":function(req,res){
	var id = req.params.id;
	var user = db.get('users').find({id:id}).value();
	res.render('view4',{user:user});

}
};