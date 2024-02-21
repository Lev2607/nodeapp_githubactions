const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send(`
    <h1>Willkommen auf der Startseite</h1>
    <p>Hier ist etwas zusätzlicher Text.</p>
    <p>Du kannst auch andere HTML-Elemente verwenden.</p>
  `);


const server = app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });
  
  module.exports = server; 