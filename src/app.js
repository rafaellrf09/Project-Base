require('dotenv').config();
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
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

  createClusters() {
    if(cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);

      for(let i = 0; i < numCPUs ; i++) cluster.fork();

      cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
      });
    } else {
      console.log(`Worker ${process.pid} started`);
      
    }
  }
}

module.exports = new App().app;