/**
 * Created by Razvan on 07.05.2016.
 */
Ext.define('MyApp.view.PoiCombo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.poicombobox',

    initComponent: function () {
        var me = this;
        
        Ext.apply(me, {
            fieldLabel: 'Choose point of interest:',
            store: me.initStore(),
            queryMode: 'local',
            triggerAction : 'all',
            forceSelection: true,
            anchor: '50%',
            allowBlank: false,
            editable: false,
            value: "hotels",
            listeners: {
                select: {fn: me.selectHandler, scope:me}
            }
        });

        me.callParent(arguments);
    },

    initStore: function () {
        var me = this;

        me.storeReferences = Ext.create('Ext.data.Store', {
            fields: ['title', 'value'],
            data: [
                {"title": "Hotels", "value": "hotels"},
                {"title": "Restaurants", "value": "restaurants"},
                {"title": "Museums", "value": "museums"}
            ],
            autoLoad: false
        });

        return me.storeReferences;
    },
    
    selectHandler: function (combo, record, eOpts) {

        var me = this;
        
        me.googleMap = me.mainParent.down('googleview');
        me.googleMap.poi = record.data.value;
        me.googleMap.performSearch();

    }

    // performSearch: function () {
    //     var map = this;
    //     debugger;
    //     console.log('intra');
    //
    //     mainComponent = MyApp.singleton.Singleton.getComponent();
    //     var request = {
    //         bounds: map.getBounds(),
    //         keyword: mainComponent.poi
    //     };
    //     mainComponent.service.radarSearch(request, mainComponent.callback);
    // }

//     callback: function (results, status) {
//         var me = this;
// debugger;
//         if (status !== google.maps.places.PlacesServiceStatus.OK) {
//             // Ext.Msg.alert('Info', 'No hotels found in your area. Please navigate.');
//             return;
//         }
//         for (var i = 0, result; result = results[i]; i++) {
//             // Ext.Msg.alert('Info', 'We found ' + results.length + ' hotels for you.');
//             me.addMarker(result);
//
//         }
//     },

    // addMarker: function (place) {
    //     var me = this;
    //
    //     var marker = new google.maps.Marker({
    //         map: me.gmap,
    //         position: place.geometry.location,
    //         icon: {
    //             url: 'resources/hotel.png',
    //             anchor: new google.maps.Point(10, 10),
    //             scaledSize: new google.maps.Size(45, 45)
    //         }
    //     });
    //
    //
    //
    //     google.maps.event.addListener(marker, 'click', function() {
    //         me.service.getDetails(place, function(result, status) {
    //             me.infoWindow.close();
    //
    //             var data = {
    //                 name: Ext.isDefined(result.name) ? result.name : "" ,
    //                 address: Ext.isDefined(result.formatted_address) ? result.formatted_address : "",
    //                 phone: Ext.isDefined(result.formatted_phone_number) ? result.formatted_phone_number : "",
    //                 openNow: Ext.isDefined(result.opening_hours) ? result.opening_hours.open_now : "",
    //                 openingHours: Ext.isDefined(result.opening_hours) ? result.opening_hours.weekday_text : "",
    //                 website: Ext.isDefined(result.website) ? result.website : "",
    //                 photos: Ext.isDefined(result.photos) ? result.photos : "",
    //                 visited: 1,
    //                 rating: Ext.isDefined(result.rating) ? result.rating : "",
    //                 lat: Ext.isDefined(result.geometry) ? result.geometry.location.lat() : "",
    //                 lng: Ext.isDefined(result.geometry) ? result.geometry.location.lng() : "",
    //                 comments: []
    //             };
    //
    //             Ext.Ajax.request({
    //                 method: 'POST',
    //                 headers: { "Content-Type": "application/json" },
    //                 url: '/insertHotel',
    //                 params: Ext.JSON.encode(data),
    //                 success: function (response) {
    //                     var rightPanel = me.mainView.down('rightpanel');
    //                     rightPanel.params = Ext.JSON.decode(response.responseText);
    //                     rightPanel.storeReference.load({
    //                         params: rightPanel.params
    //                     });
    //                     rightPanel.expand();
    //                 }
    //             });
    //             me.infoWindow.setContent(result.name);
    //             me.infoWindow.open(me.gmap, marker);
    //         });
    //     });
    // }
});