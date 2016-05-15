/**
 * Created by Razvan on 06.05.2016.
 */
Ext.define('MyApp.store.users.RightPanel', {
    extend: 'Ext.data.Store',
    requires: [
        'MyApp.model.users.RightPanel'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.users.RightPanel',
            pageSize: 10,
            sortOnLoad: false,
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