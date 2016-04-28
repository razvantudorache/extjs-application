/**
 * Created by Razvan on 21.04.2016.
 */
Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',
    
    reguires: [
      'My.view.MainView'  
    ],

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            layout: 'fit',
            items: [
                {
                    xtype: 'mainview'
                }
            ]
        });
        me.callParent(arguments);
    }

});