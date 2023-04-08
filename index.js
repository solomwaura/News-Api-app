const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views');


const apiKey = 'b2481e727a18465abe944711455c1a07';

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=general&language=en&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  res.render('index', { articles: data.articles });
});

app.get('/sports', async (req, res) => {
  
  const url = `https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  res.render('sports', { articles: data.articles });
});

const port = 3540;
app.listen(port, () => {
  console.log(`Server running on port http://127.0.0.1:${port}`);
});

