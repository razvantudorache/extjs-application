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
            value: "hotel",
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
                {"title": "Hotels", "value": "hotel"},
                {"title": "Restaurants", "value": "restaurant"}
            ],
            autoLoad: false
        });

        return me.storeReferences;
    },
    
    selectHandler: function (combo, record, eOpts) {

        var me = this;
        
        me.googleMap = me.mainParent.down('googleview');
        me.googleMap.poi = record.data.value;
        me.googleMap.selected = true;
        me.googleMap.performSearch();

    }
});