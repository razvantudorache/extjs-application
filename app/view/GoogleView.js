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

        var gmap = Ext.ComponentQuery.query('googleview')[0].gmap;
        var lat = position.coords.latitude;
        var long = position.coords.longitude;
        var currentLocation = new google.maps.LatLng(lat,long);

        gmap.setCenter(currentLocation);
        var marker = new google.maps.Marker({
            position: currentLocation,
            map: gmap,
            title: 'You are here!'
        });

        gmap.setZoom(16);

    },

    afterComponentLayout: function () {

        var me = this;
        me.callParent();

        //set component to be used in other functions
        MyApp.singleton.Singleton.setComponent(me);

        me.infoWindow = new google.maps.InfoWindow();
        me.service = new google.maps.places.PlacesService(me.gmap);

        me.gmap.addListener('idle', me.performSearch);
    },

    performSearch: function () {
        var map = this;
        console.log('intra');

        var mainComponent = MyApp.singleton.Singleton.getComponent();
        var request = {
            bounds: map.getBounds(),
            keyword: 'hotels'
        };
        mainComponent.service.radarSearch(request, mainComponent.callback);
    },

    callback: function (results, status) {
        var me = MyApp.singleton.Singleton.getComponent();

        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            Ext.Msg.alert('Info', 'No hotels found in your area. Please navigate.');
            return;
        }
        for (var i = 0, result; result = results[i]; i++) {
            Ext.Msg.alert('Info', 'We found ' + results.length + ' hotels for you.');
            me.addMarker(result);
        }
    },

    addMarker: function (place) {
        var me = this;

        var marker = new google.maps.Marker({
            map: me.gmap,
            position: place.geometry.location,
            icon: {
                url: 'resources/hotel.png',
                anchor: new google.maps.Point(10, 10),
                scaledSize: new google.maps.Size(30, 30)
            }
        });

        google.maps.event.addListener(marker, 'click', function() {
            me.service.getDetails(place, function(result, status) {
                // debugger;
                // me.infoWindow.setContent(result.name);
                // me.infoWindow.open(me.gmap, marker);
            });
        });
    }
});
