// same as import express from 'express';
const express = require('express');
const moment = require('moment');

const server = express();

// routes === endpoints
server.get('/', (req, res) => {
  res.send('<h2>Hello! World.</h2>');
});

// write an endpoint that handles GET request to /now, returns current date/time

server.get('/now', (req, res) => {
  res.send(`Current Date/Time: ${moment(Date.now()).format('MM/DD/YY hh:mm:ss a')}`);
});

server.listen(4000, () => {
  console.log('\n***Running on port 4000 ***\n');
});