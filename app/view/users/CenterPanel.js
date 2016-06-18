/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.users.CenterPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.centerpanel',
    cls: 'centerPanel',
    requires: [
        'MyApp.view.users.GoogleView',
        'MyApp.view.users.PoiCombo'
    ],
    
    initComponent: function () {
        var me = this;

        Ext.apply(me, {
           layout: 'anchor',
            items: [
                {
                    xtype: 'poicombobox',
                    cls: 'combobox',
                    mainParent: me,
                    displayField: 'title',
                    valueField: 'value'
                }
                ,
                {
                    xtype: 'googleview',
                    mainView: me.mainView,
                    anchor: '100% 95%'
                }
            ]
        });
        me.callParent(arguments);
    }
});
