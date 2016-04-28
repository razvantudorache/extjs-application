/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.CommentPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.commentpanel',

    emptyText: 'no data',

    initComponent: function () {
        var me = this;
        me.template = new Ext.XTemplate(
            '<tpl for=".">' +
                '<div class="item">' +
                    '<span style="display: block">{dateComment}</span>' +
                    '<span>{comment}</span>' +
                '</div>' +
            '</tpl>'
        );

        Ext.apply(me,{
            items: [
                {
                    xtype: 'dataview',
                    tpl: me.template,
                    store: me.initStore(),
                    itemSelector: 'div.item',
                    emptyText: me.emptyText,
                    deferEmptyText: false
                }
            ]
        });
        me.callParent(arguments);
    },

    initStore: function () {
        var me = this;

        me.storeReference = Ext.create('MyApp.store.CommentPanel');
        me.storeReference.proxy.url = me.url;
        me.storeReference.load();
        return me.storeReference;

    }
});