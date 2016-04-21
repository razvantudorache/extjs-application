/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    requires: [
      'MyApp.view.GoogleView'  
    ],
    labelText: {
        title: 'Welcome'
    },

    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            layout: 'border',
            items: [
                {
                    region: 'north',
                    html: '<h2>' + me.labelText.title + '</h2>'

                },
                {
                    region: 'center',
                    xtype: 'googleview'
                },
                {
                    region: 'south'
                    
                }
            ]
        });

        me.callParent(arguments);
    }

});