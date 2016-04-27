/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    requires: [
      'MyApp.view.CenterContainer'  
    ],
    labelText: {
        title: 'Welcome'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            layout: 'border',
            items: [
                {
                    cls: 'mainTitle',
                    html: '<h2>' + me.labelText.title + '</h2>',
                    region: 'north'

                },
                {
                    xtype: 'centercontainer',
                    region: 'center'
                },
                {
                    xtype: 'bottomcontainer',
                    region: 'south'
                }
            ]
        });
        me.callParent(arguments);
    }

});