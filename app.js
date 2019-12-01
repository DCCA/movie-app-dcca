// Require
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const MY_KEY = require('./config.js')


// Config
app.use(bodyParser.urlencoded({encoded: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Get
app.get('/movie-detail', (req, res) => {
	let searchMovieId = req.query.id;
	let urlApi = 'https://www.omdbapi.com/?i=' + searchMovieId + MY_KEY;
	request( urlApi, function (error, response, body) {
		if(!error && response.statusCode == 200){
			let jData = JSON.parse(body);
			res.render('movie-detail', {jData: jData});
			console.log(jData);
			console.log(jData['Response']);
		   }  		
	})
});

app.get('/result', (req, res) => {
	let searchTerm = req.query.search;
	let urlApi = 'https://www.omdbapi.com/?s=' + searchTerm + MY_KEY;
	request( urlApi, function (error, response, body) {
		if(!error && response.statusCode == 200){
			let jData = JSON.parse(body);
			res.render('result', {jData: jData});
			console.log(jData);
			console.log(jData['Response']);
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