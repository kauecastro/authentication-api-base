const express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  cors = require('cors'),
  config = require('./config'),
  routes = require('./routes');

const server = () => {
  app.use(cors({ exposedHeaders: ['Content-Length', 'Authorization'] }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/users', routes.users);

  app.listen(config.PORT, function () {
    console.log(`Lstening on port ${config.PORT}!`);
  });
}
 
module.exports = server;