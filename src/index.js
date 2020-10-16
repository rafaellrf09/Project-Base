const app = require('./app');

app.listen(process.env.APP_PORT, () => {
  console.log(`Sevidor iniciado na porta ${process.env.APP_PORT}`);
});