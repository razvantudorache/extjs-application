/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.BottomContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.bottomcontainer',

    labelText: {
        title: 'Comments'
    },

    initComponent: function () {
        var me = this;
        Ext.applyIf(me, {
            layout: 'hbox',
            items: [
                {
                    html: '<h1>' + me.labelText.title + '</h1>',
                    flex: 1
                },
                {
                    xtype: 'commentpanel',
                    url: 'resources/CommentPanel.json',
                    flex: 2
                },
                {
                    xtype: 'textarea'
                }
            ]
        });
        me.callParent(arguments);
    }
});
