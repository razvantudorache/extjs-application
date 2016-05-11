/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.CommentPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.commentpanel',

    requires: [
        'MyApp.store.CommentPanel'
    ],
    labelText: {
        posted: 'Posted at: '
    },
    cls: 'commentPanel',
    emptyText: 'No data',

    initComponent: function () {
        var me = this;

        me.template = new Ext.XTemplate(
            '<tpl for=".">' +
                '<div class="item">' +
                    '<span class="dateComment">'+ me.labelText.posted +'{commentDate:date("Y-m-d H:i:s")}</span>' +
                    '<span class="comment">{commentText}</span>' +
                '</div>' +
                '<tpl if="xindex<xcount">' +
                '<hr class="delimiterLine">' + 
                '</tpl>' +
            '</tpl>'
        );

        Ext.apply(me,{
            width: 400,
            items: [
                {
                    xtype: 'dataview',
                    tpl: me.template,
                    height: 150,
                    store: me.initStore(),
                    itemSelector: 'div.item',
                    emptyText: me.emptyText,
                    scrollable: 'y',
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

        return me.storeReference;

    }
});