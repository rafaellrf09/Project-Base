const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const app = require('./app');

if(cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for(let i = 0; i < numCPUs ; i++) cluster.fork();

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  console.log(`Worker ${process.pid} started`);

  app.listen(process.env.APP_PORT, () => {
    console.log(`Sevidor iniciado na porta ${process.env.APP_PORT}`);
  });
}