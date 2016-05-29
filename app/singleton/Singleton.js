/**
 * Created by Razvan on 03.05.2016.
 */
Ext.define('MyApp.singleton.Singleton', {
    singleton: true,

    mainComponent: null,
    coords: {},
    
    setComponent: function (value) {
        mainComponent = value;
    },
    getComponent: function () {
        return mainComponent;
    },
    setCoords: function (lat,lng) {
        coords = {
            lat: lat,
            lng: lng
        }
    },
    getCoords: function () {
        return coords;
    }
});