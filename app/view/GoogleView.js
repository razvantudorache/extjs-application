/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.GoogleView', {
    extend: 'Ext.ux.GMapPanel',
    alias: 'widget.googleview',
    cls: 'test',
    
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            gmapType: 'map',
            center: {
                geoCodeAddr: "221B Baker Street",
                marker: {
                    title: 'Holmes Home'
                }
            },
            mapOptions : {
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }
        });

        me.callParent();
    }
});
