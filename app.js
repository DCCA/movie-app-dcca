// Require
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const MY_KEY = require('./config.js')


// Config
app.use(bodyParser.urlencoded({encoded: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Get
app.get('/movie-detail', async (req, res) => {
	let searchMovieId = req.query.id;
	let urlApi = 'https://www.omdbapi.com/?i=' + searchMovieId + MY_KEY;
	try {
		const response = await axios.get(urlApi);
		res.render('movie-detail', {jData: response.data});
	} catch (error) {
		console.error('Error fetching movie detail:', error.message);
		res.status(500).send('Error fetching movie data');
	}
});

app.get('/result', async (req, res) => {
	let searchTerm = req.query.search;
	let urlApi = 'https://www.omdbapi.com/?s=' + searchTerm + MY_KEY;
	try {
		const response = await axios.get(urlApi);
		res.render('result', {jData: response.data});
	} catch (error) {
		console.error('Error fetching search results:', error.message);
		res.status(500).send('Error fetching search results');
	}
});

app.get('/', (req, res) => {
	res.render('home');
});

// Listen
app.listen(3000, () => {
   console.log('Server started!');
});