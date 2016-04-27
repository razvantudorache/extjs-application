/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.CenterContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.centercontainer',

    requires: [
        'MyApp.view.GoogleView'
    ],
    
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            layout: 'hbox',
            items: [
                {
                    xtype: 'googleview',
                    flex: 3
                },
                {
                    xtype: 'rightcontainer',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
