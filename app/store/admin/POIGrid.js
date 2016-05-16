/**
 * Created by Razvan on 16.05.2016.
 */
Ext.define('MyApp.store.admin.POIGrid', {
    extend: 'Ext.data.Store',
    requires: [
        'MyApp.model.admin.POIGrid'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.admin.POIGrid',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    rootProperty: 'payload.results',
                    successProperty: 'success'
                }
            }
        }, cfg)]);
    }
    
});