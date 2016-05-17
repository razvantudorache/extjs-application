/**
 * Created by Razvan on 17.05.2016.
 */
exports.getMostVisitedPOIs = function (db, req, res) {

    db.collection('poiTable').find().sort({visited: -1}).limit(10).toArray(function (error, items) {
        var response = [];
        for (var i=0; i<items.length; i++) {
            var poi = {
                name: items[i].name,
                visited: items[i].visited,
                rating: items[i].rating
            };
            response.push(poi);
        }
        var data = {
            success: true,
            payload: {
                results: response
            }
        };
        res.json(data);
    });
};