/**
 * Created by Razvan on 04.05.2016.
 */
exports.insertPOI = function (db, req, res) {

    var data = req.body;
    
    db.collection('poiTable').findAndModify(
        {name: data.name}, //query
        [], //sort
        {
            $inc: {"visited": 1},
            $set: {
                type:data.type,
                name: data.name,
                address: data.address,
                phone: data.phone,
                openNow: data.openNow,
                openingHours: data.openingHours,
                website: data.website,
                photos: data.photos,
                rating: data.rating,
                lat: data.lat,
                lng: data.lng,
                comments: data.comments
            }
        }, //update
        {new: true, upsert: true}
        ,
        function (error, response) {
            var data = {
                lat: response.value.lat,
                lng: response.value.lng,
                table: response.value.table
            };
            res.json(data);
        }
    );
};
