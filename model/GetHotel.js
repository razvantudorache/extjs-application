/**
 * Created by Razvan on 06.05.2016.
 */
exports.getHotel = function (db, req, res) {

    var latitude = parseFloat(req.query.lat);
    var longitude = parseFloat(req.query.lng);
    var table = req.query.table;

    db.collection(table).find(
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
        } else if (item.length === 0) {
            res.json(data);
        }

    });
};