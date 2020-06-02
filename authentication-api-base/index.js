const express = require('express')
const app = express()
const authRoute = require('./routes/auth-route');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({exposedHeaders: ['Content-Length', 'Authorization']}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoute);

app.listen(process.env.PORT || 3000, () => {
	console.log("server is runing");
});