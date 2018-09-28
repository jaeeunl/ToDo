const favoriteRoutes = require('./favorite_routes');
module.exports = function(app, db) {
  favoriteRoutes(app, db);
};