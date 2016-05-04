/**
 * Created by Razvan on 04.05.2016.
 */
exports.insertData = function (db, req, res) {


    var data = db.collection('test').insert(
        {
            "name": "abc",
            "number": 1
        }
    ,function(err,docsInserted){
            
            console.log(docsInserted);
            res.json(docsInserted.result.ok);
        });

};