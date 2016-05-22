/**
 * Created by Razvan on 16.05.2016.
 */
Ext.define('MyApp.view.admin.POIGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.poigrid',
    
    requires: [
        'MyApp.store.admin.POIGrid'
    ],

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            plugins: 'gridfilters',
            columns: [
                { text: 'Name',
                    dataIndex: 'name',
                    flex:1,
                    filter: {
                        // required configs
                        type: 'string'
                    }
                },
                { text: 'Email', dataIndex: 'address', flex:1},
                { text: 'Phone', dataIndex: 'phone', flex:1 },
                { text: 'Website', dataIndex: 'website', flex:1 },
                { text: 'Rating', dataIndex: 'rating', flex:1 },
                { text: 'Type', dataIndex: 'type', flex:1 },
                { text: 'Visited', dataIndex: 'visited', flex:1}
            ],
            store: me.initStore()
        });
        me.callParent(arguments);
    },
    
    initStore: function () {
        var me = this;

        me.storeReference = Ext.create('MyApp.store.admin.POIGrid');
        me.storeReference.proxy.url = me.url;
        me.storeReference.load({
            params: {type:me.type}
        });
        return me.storeReference;
    }
});