/**
 * Created by Razvan on 17.05.2016.
 */
Ext.define('MyApp.store.admin.MostVisitedPOI', {
    extend: 'Ext.data.Store',
    
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            fields: ['name', 'visited', 'rating'],
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