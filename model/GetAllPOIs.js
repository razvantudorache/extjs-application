/**
 * Created by Razvan on 16.05.2016.
 */
exports.getAllPOIs = function (db, req, res) {

   var type = req.query.type;
    if (type === "") {
        db.collection('poiTable').find().toArray(function (error, item) {
            var data = {
                success: true,
                payload: {
                    results: item
                }
            };
            res.json(data);
        })
    } else {
        db.collection('poiTable').find(
            {type: type}
        ).toArray(function (error, item) {
            var data = {
                success: true,
                payload: {
                    results: item
                }
            };
            res.json(data);
        })
    }

};