/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.BottomPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.bottompanel',
    
    requires: [
        'MyApp.view.TextAreaPanel',
        'MyApp.view.CommentPanel'
    ],

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            layout: 'vbox',
            items: [
                {
                    xtype: 'commentpanel',
                    url: 'resources/CommentPanel.json',
                    flex: 1

                },
                {
                    xtype: 'textareapanel',
                    layout: 'hbox',
                    flex: 1,
                    mainParent: me
                }
            ]
        });
        me.callParent(arguments);
    },

    expand: function () {
        var me = this;
        var coords = MyApp.singleton.Singleton.getCoords();
        me.callParent();
    }
});
