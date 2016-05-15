/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.users.GoogleView', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.googleview',

    cls: 'googleContainer',

    initComponent: function () {
        var me = this;

        me.markers = [];

        Ext.apply(me, {
            gmapType: 'map',
            center: {
                lat: 42,
                lng: 42,
                marker: {
                    title: 'Holmes Home'
                }
            },
            mapOptions: {
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
        me.poi = "hotel";
        navigator.geolocation.getCurrentPosition(me.getLocation);
    },

    getLocation: function (position) {


        var map = Ext.ComponentQuery.query('googleview')[0];
        if (Ext.isDefined(map)) {
            var gmap = map.gmap;
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var currentLocation = new google.maps.LatLng(lat, long);

            MyApp.singleton.Singleton.setCoords(lat, long);
            gmap.setCenter(currentLocation);
            var marker = new google.maps.Marker({
                position: currentLocation,
                map: gmap,
                title: 'You are here!'
            });

            gmap.setZoom(16);
        }
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
            bounds: mainComponent.gmap.getBounds(),
            keyword: mainComponent.poi
        };
        mainComponent.service.radarSearch(request, mainComponent.callback);
    },

    callback: function (results, status) {
        var me = MyApp.singleton.Singleton.getComponent();


        if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
        }

        //reset the previous markers
        if (me.selected) {
            me.setMapOnAll(null);
            me.markers = [];
            me.selected = false;
        }

        for (var i = 0, result; result = results[i]; i++) {
            me.addMarker(result);

        }
        me.setMapOnAll(me.gmap);
    },

    addMarker: function (place) {
        var me = this;

        var marker = new google.maps.Marker({
            position: place.geometry.location,
            icon: {
                url: 'resources/' + me.poi + '.png',
                anchor: new google.maps.Point(10, 10),
                scaledSize: new google.maps.Size(40, 40)
            }
        });

        me.markers.push(marker);

        google.maps.event.addListener(marker, 'click', function () {
            me.infoWindow.close();
            me.service.getDetails(place, function (result, status) {

                if (Ext.isDefined(result.photos)) {
                    for (var i=0; i<result.photos.length; i++) {
                        result.photos[i] = result.photos[i].getUrl({'maxWidth': 400, 'maxHeight': 400});
                    }
                }
                var data = {
                    type: me.poi,
                    name: Ext.isDefined(result.name) ? result.name : "",
                    address: Ext.isDefined(result.formatted_address) ? result.formatted_address : "",
                    phone: Ext.isDefined(result.international_phone_number) ? result.international_phone_number : "",
                    openNow: Ext.isDefined(result.opening_hours) ? result.opening_hours.open_now : "",
                    openingHours: Ext.isDefined(result.opening_hours) ? result.opening_hours.weekday_text : "",
                    website: Ext.isDefined(result.website) ? result.website : "",
                    photos: Ext.isDefined(result.photos) ? result.photos : "",
                    visited: 1,
                    rating: Ext.isDefined(result.rating) ? result.rating : "",
                    lat: Ext.isDefined(result.geometry) ? result.geometry.location.lat() : "",
                    lng: Ext.isDefined(result.geometry) ? result.geometry.location.lng() : "",
                    comments: []
                };
                var rightPanel = me.mainView.down('rightpanel');
                var commentsRightPanel = rightPanel.down('commentarea').down('commentpanel');
                commentsRightPanel.namePOI = data.name;

                Ext.Ajax.request({
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    url: '/insertPOI',
                    params: Ext.JSON.encode(data),
                    success: function (response) {

                        var responseDecoded = Ext.JSON.decode(response.responseText);
                        rightPanel.rating = data.rating;
                        rightPanel.storeReference.load({
                            params: responseDecoded
                        });
                        commentsRightPanel.storeReference.load({
                            params: responseDecoded
                        });
                        rightPanel.expand();
                    }
                });
                me.infoWindow.setContent(result.name);
                me.infoWindow.open(me.gmap, marker);
            });
        });
    },

    setMapOnAll: function (map) {

        var me = this;

        for (var i = 0; i < me.markers.length; i++) {
            me.markers[i].setMap(map);
        }
    }
});
