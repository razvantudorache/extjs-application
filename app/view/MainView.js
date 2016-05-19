/**
 * Created by Razvan on 28.04.2016.
 */
Ext.define('MyApp.view.MainView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.mainview',

    requires: [
        'MyApp.view.users.CenterPanel',
        'MyApp.view.users.RightPanel'
    ],
    labelText: {
        mainTitle: 'Welcome',
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
                {
                    title: me.labelText.detailsTitle,
                    xtype: 'rightpanel',
                    mainView: me,
                    region:'east',
                    url: '/getPOI',
                    flex: 1,
                    split: false,
                    collapsed: true
                }
            ]
        });
        me.callParent(arguments);
    }
});
