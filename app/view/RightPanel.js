/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.RightPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rightpanel',

    requires: [
        'MyApp.store.RightPanel'
    ],
    labelText: {
        title: 'Details'
    },
    emptyText: 'No Data',

    initComponent: function () {
        var me = this;

        me.template = Ext.XTemplate(
            '<tpl for=".">' +
                '<div class="item">' +
                    '<div class="hotelHeader">' +
                        '<span class="hotelName">{name}</span>' +
                        '<span class="hotelRating">{rating}</span>' +
                    '</div>' +
                    '<div class="hotelStreet">{address}</div>' +
                    '<div class="hotelPhone">{phone}</div>' +
                    '<div class="hotelOpenNow">{openNow}</div>' +
                    '<div class="hotelWebsite"><a href="{website}" target="_blank">{website}</a></div>' +
                '</div>' +
            '</tpl>'
        );
        Ext.apply(me, {
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

        me.storeReference = Ext.create('MyApp.store.RightPanel');
        me.storeReference.proxy.url = me.url;
        me.storeReference.load({
            callback: function (records, operation, success) {
                if (Ext.isEmpty(records)) {
                    Ext.Msg.alert('Info', 'None hotel selected!');
                }
            },
            scope: me
        });

        return me.storeReference;
    }
});
