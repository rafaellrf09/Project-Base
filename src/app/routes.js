const { Router } = require('express');


const routes = Router();

routes.route('/teste')
  .get((req, res) => {})
  .post()
  .put()
  .delete()


module.exports = routes;