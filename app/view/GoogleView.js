/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.GoogleView', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.googleview',
    width: 450,
    height: 250,
    cls: 'test',

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            gmapType: 'map',
            center: {
                lat: 42,
                lng: 42
            },
            mapOptions : {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            },
            listeners: {
                render: function() {
                    navigator.geolocation.getCurrentPosition(me.getLocation);
                }

            }

        });

        me.callParent();
    },

    getLocation: function (position) {
        var map = Ext.ComponentQuery.query('googleview');
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var currLocation = new google.maps.LatLng(lat,long);

        map[0].gmap.setCenter(currLocation);
        
        
    }
});
