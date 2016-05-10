/**
 * Created by Razvan on 06.05.2016.
 */
exports.getPOI = function (db, req, res) {

    var latitude = parseFloat(req.query.lat);
    var longitude = parseFloat(req.query.lng);


    db.collection('poiTable').find(
        {lat: latitude, lng:longitude}
    ).toArray(function (error, item) {
        if (item.length === 1) {
            var data = {
                success: true,
                payload: {
                    results: [
                        item[0]
                    ]
                }
            };
            res.json(data);
        }

    });
};