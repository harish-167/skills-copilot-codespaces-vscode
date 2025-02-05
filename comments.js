// Create web server
var express = require('express');
var app = express();

// Simple in-memory store for now
var comments = [];

app.get('/comments', function(req, res) {
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.json(comments);
});

app.listen(3000, function() {
  console.log('Server started: http://localhost:3000/');
});