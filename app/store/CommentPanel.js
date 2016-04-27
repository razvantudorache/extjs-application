/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.store.CommentPanel', {
    extend: 'Ext.data.Store',
    requires: [
        'MyApp.model.CommentPanel'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.CommentPanel',
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