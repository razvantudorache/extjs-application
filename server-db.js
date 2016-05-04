/**
 * Created by Razvan on 03.05.2016.
 */
var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/mydb';

var _db;

module.exports = {
    connectToServer: function( callback ) {
        MongoClient.connect( url, function( err, db ) {
            _db = db;
            return callback( err );
        } );
    },

    getDb: function() {
        return _db;
    }
};