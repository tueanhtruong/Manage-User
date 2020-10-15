const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const userRouter = require('./router/user.router.js');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine','pug');
app.set('views','./view');

app.get('/', (req, res) => {
	res.render('view1');
});

app.use('/user',userRouter);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});