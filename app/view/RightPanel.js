/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.RightPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.rightpanel',

    requires: [
        'MyApp.store.RightPanel',
        'MyApp.view.CommentArea'
    ],
    labelText: {
        title: 'Details'
    },
    emptyText: 'No Data',
    cls: 'detailsCls',

    initComponent: function () {
        var me = this;

        me.template = new Ext.XTemplate(
            '<tpl for=".">' +
                '<div class="item">' +
                    '<div class="hotelHeader">' +
                        '<span class="hotelName">{name}</span>' +
                        '<tpl if="values.rating">' +
                            '<span class="hotelRating" id="stars">{rating}</span>' +
                        '</tpl>' +
                    '</div>' +
                    '<tpl if="values.address">' +
                        '<div class="hotelStreet">{address}</div>' +
                    '</tpl>' +
                    '<tpl if="values.phone">' +
                        '<div class="hotelPhone">{phone}</div>' +
                    '</tpl>' +
                    '<tpl if="values.openNow">' +
                        '<div class="hotelOpenNow {openNow}">Open now</div>' +
                    '</tpl>' +
                    '<tpl if="values.website">' +
                        '<div class="hotelWebsite"><a href="{website}" target="_blank">{website}</a></div>' +
                    '</tpl>' +
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
                    deferEmptyText: false,
                    prepareData: function (data) {
                        var me = this;
                        me.up().openingHours = data.openingHours;
                        me.up().photos = data.photos;
                        return data;
                    }
                }
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                cls: 'rightPanelToolbar',
                items: [
                    {
                        xtype: 'commentarea'
                    }
                ]
            }]
        });
        me.callParent(arguments);
    },

    initStore: function () {
        var me = this;

        me.storeReference = Ext.create('MyApp.store.RightPanel');
        me.storeReference.proxy.url = me.url;

        return me.storeReference;
    },

    afterLayout: function () {

        var me = this;
        var tooltip = '<div>';

        if (me.openingHours){
            for (var i = 0; i < me.openingHours.length; i++) {
                tooltip += '<span class="toolTipOpen">'+ me.openingHours[i] +'</span><br>';
            }
            tooltip += '</div>';

            var elem = Ext.dom.Query.select('.hotelOpenNow');
            if (elem.length !== 0){
                elem[0].setAttribute('data-qtip', tooltip);
            }
        }
        var rating = Ext.dom.Query.select('.hotelRating');
        if (rating.length !== 0) {
            new Ext.ux.rating.Picker({
                value: me.rating,
                trackOver: false,
                rounding: 0.25,
                renderTo:'stars'
            });
        }

    }

});
