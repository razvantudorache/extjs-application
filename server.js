  var express         = require('./packages/node_modules/express');
  var app             = express();
  var mongoConnection = require('./server-db.js');
  var insertPOI   = require('./model/InsertPOI.js');
  var getPOI   = require('./model/GetPOI.js');
  var getComments = require('./model/GetComments.js');
  var insertComment = require('./model/InsertComment.js');
  var bodyParser = require('body-parser');
  
  app.use(express.static(__dirname));
  app.use(bodyParser.json());
  
  mongoConnection.connectToServer(function (err) {
    var db = mongoConnection.getDb();

    app.post('/insertPOI', function (req, res) {
      
      insertPOI.insertPOI(db, req, res);
    });
    
    app.get('/getPOI', function (req, res) {

      getPOI.getPOI(db, req, res);
    });

    app.get('/getComments', function (req, res) {

      getComments.getComments(db, req, res);
    });

    app.put('/insertComment', function (req, res) {

      insertComment.insertComment(db, req, res);
    });
  });
  
  app.get('/', function (req, res) {
  	 res.sendFile(__dirname+"\\index.html");
  });
  
  app.get('/', function (req, res) {
    res.sendFile(__dirname+"\\index2.html");
  });
  
  var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port)

  });