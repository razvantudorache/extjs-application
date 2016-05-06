/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.CenterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centerpanel',

    requires: [
        'MyApp.view.GoogleView'
    ],
    
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            items: [
                {
                    xtype: 'googleview',
                    mainView: me.mainView
                }
            ]
        });
        me.callParent(arguments);
    }
});
