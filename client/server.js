const path = require('path');
const express = require('express');
const app = express();

const static_path = path.join(__dirname, 'dist');
app.use(express.static(static_path))
  .get('*', (req, res) => {
    res.sendFile('index.html', {
      root: static_path
    });
  })
  .listen(8000, (err) => {
    if (err) { console.log(err) };
    console.log('Listening at localhost:8000');
  });
