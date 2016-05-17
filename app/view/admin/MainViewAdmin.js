/**
 * Created by Razvan on 15.05.2016.
 */
Ext.define('MyApp.view.admin.MainViewAdmin', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.mainviewadmin',
    
    requires: [
        'MyApp.view.admin.POIGrid',
        'MyApp.view.admin.MostVisitedPOI'
    ],

    defaults: {
        bodyPadding: 10,
        scrollable: true
    },
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    title: 'All POIs from DB',
                    xtype: 'poigrid',
                    type: '',
                    url: '/getAllPOIs'
                },
                {
                    title: 'Hotels from DB',
                    xtype: 'poigrid',   
                    type: 'hotel',
                    url: '/getAllPOIs'
                },
                {
                    title: 'Restaurants from DB',
                    xtype: 'poigrid',
                    type: 'restaurant',
                    url: '/getAllPOIs'
                },
                {
                    title: 'Most visited POIs',
                     xtype: 'mostvisitedpoi'
                }
            ]
        });

        me.callParent(arguments);
    }
});