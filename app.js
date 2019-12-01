// Require
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const MY_KEY = require('./config.js')


// Config
app.use(bodyParser.urlencoded({encoded: true}));
app.set('view engine', 'ejs');

// Get
app.get('/', (req, res) => {
	let urlApi = 'https://www.omdbapi.com/?i=tt3896198' + MY_KEY;
	request( urlApi, function (error, response, body) {
		if(!error && response.statusCode == 200){
			let jData = JSON.parse(body);
			res.render('home', {jData: jData});
		   }  		
	})
});

app.get('/', (req, res) => {
	res.render('home');
});

// Listen
app.listen(3000, () => {
   console.log('Server started!');
});