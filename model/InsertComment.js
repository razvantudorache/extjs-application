/**
 * Created by Razvan on 08.05.2016.
 */
exports.insertComment = function (db, req, res) {
    var data = req.body;

    db.collection('poiTable').findAndModify(
        {name: data.name}, //query
        [], //sort
        {
            $push: {
                comments: data.newComment
            }
        }, //update
        {new: true, upsert: true}
        ,
        function (error, response) {
            var data = {
                lat: response.value.lat,
                lng: response.value.lng
            };
            res.json(data);
        }
    );
};
