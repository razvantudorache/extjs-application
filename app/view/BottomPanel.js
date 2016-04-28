/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.BottomPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.bottompanel',

    labelText: {
        title: 'Comments'
    },

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            layout: 'hbox',
            items: [
                {
                    xtype: 'commentpanel',
                    url: 'resources/CommentPanel.json',
                    flex: 2
                },
                {
                    xtype: 'textarea',
                    width: '100%',
                    height: '100%'
                }
            ]
        });
        me.callParent(arguments);
    }
});
