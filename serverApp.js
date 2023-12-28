const express = require('express');
const app = express();
const port = 3000;

let request = require('request');
let apiKey = 'f057813814e62a3eec31e85211e7e176';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

app.use(express.static('public'));

// Handle POST requests
app.use(express.urlencoded({ extended: true }));
app.post('/submit', (req, res) => {
  const formData = req.body;
  console.log(formData);

  res.redirect('/index.html');
});

app.listen(port, () => {
  console.log(`Server is running`);
  console.log(`Access here >>> http://localhost:${port}/index.html`);
});

app.use(express.static('public'));
