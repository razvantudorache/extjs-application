  var express         = require('./packages/node_modules/express');
  var app             = express();
  var mongoConnection = require('./server-db.js');
  var insertHotel   = require('./model/InsertHotel.js');
  var getHotel   = require('./model/GetHotel.js');
  var bodyParser = require('body-parser');
  
  app.use(express.static(__dirname));
  app.use(bodyParser.json());
  
  mongoConnection.connectToServer(function (err) {
    var db = mongoConnection.getDb();

    app.post('/insertHotel', function (req, res) {
      
      insertHotel.insertHotel(db, req, res);
    });
    
    app.get('/getHotel', function (req, res) {

      getHotel.getHotel(db, req, res);
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