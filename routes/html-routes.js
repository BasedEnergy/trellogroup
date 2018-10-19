
const path = require('path');




module.exports = function(app) {


  app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  app.get('/createacc', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/createacc.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
