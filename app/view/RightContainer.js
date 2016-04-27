/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.RightContainer', {
    extend: 'Ext.container.Container',
    alias: 'widget.rightcontainer',

    labelText: {
        title: 'Details'
    },

    initComponent: function () {
        var me = this;

        Ext.apply(me, {
            layout: 'hbox',
            items: [
                {
                    html: '<h1>' + me.labelText.title + '</h1>',
                    cls: 'mainTitleRightPanel',
                    flex: 1
                }
            ]
        });
        me.callParent(arguments);
    }
});
