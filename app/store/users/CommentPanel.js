/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.store.users.CommentPanel', {
    extend: 'Ext.data.Store',
    requires: [
        'MyApp.model.users.CommentPanel'
    ],

    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MyApp.model.users.CommentPanel',
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