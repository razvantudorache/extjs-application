/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.CenterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centerpanel',

    requires: [
        'MyApp.view.GoogleView',
        'MyApp.view.PoiCombo'
    ],
    
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
           layout: 'anchor',
            items: [
                {
                    xtype: 'poicombobox',
                    mainParent: me,
                    displayField: 'title',
                    valueField: 'value'
                }
                ,
                {
                    xtype: 'googleview',
                    mainView: me.mainView,
                    anchor: '100% 100%'
                }
            ]
        });
        me.callParent(arguments);
    }
});
