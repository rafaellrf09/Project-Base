const { Router } = require('express');

const routes = Router();

routes.route('/teste')
  .get((req, res) => {res.send('ok')})
  .post()
  .put()
  .delete()


module.exports = routes;