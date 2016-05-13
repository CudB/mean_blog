var Resource = require('resourcejs');
var Multer = require('multer');

module.exports = function(app, route) {

  // Setup the controller for REST;
  Resource(app, '', route, app.models.post).rest();

  // Return middleware.
  return function(req, res, next) {
    next();
  };
};


