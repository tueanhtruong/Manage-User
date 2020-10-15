const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter);
var usersl=[
		{name:'Thi',age:20},
		{name:'Tue',age:21}
			];

db.defaults({ users: usersl})
  .write();
module.exports = db;