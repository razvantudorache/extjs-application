/**
 * Created by Razvan on 08.05.2016.
 */
exports.getComments = function (db, req, res) {

    var namePOI = req.query;

    var latitude = parseFloat(req.query.lat);
    var longitude = parseFloat(req.query.lng);


    db.collection('poiTable').find(
        {lat: latitude, lng:longitude}
    ).toArray(function (error, item) {
        if (item.length === 1) {
            var results = [];
            var commentsPOI = item[0].comments;
            for (var i=0; i<commentsPOI.length; i++){
                var comment = {
                    commentDate: commentsPOI[i].commentDate,
                    commentText: commentsPOI[i].commentText
                };
                results.push(comment);
            }
            var data = {
                success: true,
                payload: {
                    results: results
                }
            };
            res.json(data);
        }

    });
};