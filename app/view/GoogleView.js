/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.GoogleView', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.googleview',
    
    cls: 'googleContainer',

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            gmapType: 'map',
            center: {
                lat: 42,
                lng: 42,
                marker: {
                    title: 'Holmes Home'
                }
            },
            height: 500,
            width: 500,
            mapOptions : {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            listeners: {
                render: {fn: me.renderHandler, scope: me}
            }
        });


        me.callParent(arguments);
    },

    renderHandler: function () {
        var me = this;
        navigator.geolocation.getCurrentPosition(me.getLocation);
    },

    getLocation: function (position) {

        var map = Ext.ComponentQuery.query('googleview')[0].gmap;
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var currentLocation = new google.maps.LatLng(lat,long);

        map.setCenter(currentLocation);
        var marker = new google.maps.Marker({
            position: currentLocation,
            map: map,
            title: 'You are here!'
        });

        map.setZoom(17);
    }
});
