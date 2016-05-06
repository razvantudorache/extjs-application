/**
 * Created by Razvan on 28.04.2016.
 */
Ext.define('MyApp.view.MainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainview',

    requires: [
        'MyApp.view.BottomPanel',
        'MyApp.view.CenterPanel',
        'MyApp.view.RightPanel'
    ],
    labelText: {
        mainTitle: 'Welcome',
        commentsTitle: 'Comments',
        googleTitle: 'Google View',
        detailsTitle: 'Details'
    },

    cls: 'mainView',

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            height: Ext.getBody().getViewSize().height,
            width: Ext.getBody().getViewSize().width,
            layout: 'border',
            defaults: {
                collapsible: true,
                split: true,
                bodyStyle: 'padding:1px'
            },
            items: [
                {
                    title: me.labelText.mainTitle,
                    region: 'north',
                    collapsible: false,
                    split: false,
                    height: 47

                },
                {
                    title: me.labelText.googleTitle,
                    xtype: 'centerpanel',
                    region: 'center',
                    layout: 'fit',
                    mainView: me,
                    flex: 2,
                    collapsible: false
                },
                // {
                //     title: me.labelText.commentsTitle,
                //     region: 'south',     // position for region
                //     xtype: 'bottompanel',
                //     height: 285,
                //     collapsible: false,
                //     collapsed: true
                // },
                {
                    title: me.labelText.detailsTitle,
                    xtype: 'rightpanel',
                    region:'east',
                    url: '/getHotel',
                    flex: 1,
                    hideCollapseTool: true,
                    floatable: false,
                    collapsed: true
                }
            ]
        });
        me.callParent(arguments);
    }
});
