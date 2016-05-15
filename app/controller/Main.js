/**
 * Created by Razvan on 20.04.2016.
 */
Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    views: [
        'MyApp.view.MainView'
    ],

    init: function () {
        var me = this;
        me.addRef([{
            ref: 'main',
            selector: '[xtype=mainview]'
        }]);
        me.callParent();
        
    },
    
    routes: {
        'admin': 'goAdminPage'
    },
    
    goAdminPage: function () {
        debugger;
        var me = this;
        var view = me.getMain();
        view.removeAll();
        console.log('intra aici');
    }
    
});