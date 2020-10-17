require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

require('./app/database');

const routes = require('./app/routes');


class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  routes(){
    this.app.use(routes);
  }

  middlewares() {
    this.app.use(bodyParser.json());
  }

}

module.exports = new App().app;