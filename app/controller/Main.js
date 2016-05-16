/**
 * Created by Razvan on 20.04.2016.
 */
Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    views: [
        'MyApp.view.MainView',
        'MyApp.view.admin.MainViewAdmin'
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
        var me = this;

        var view = me.getMain();
        view.removeAll();
        view.add(
            {
                title: 'Welcome on admin page',
                region: 'north',
                collapsible: false,
                split: false,
                height: 47
            },
            {
                title: 'Administrator panel',
                region: 'center',
                xtype: 'mainviewadmin',
                collapsible: false,
                split: false
            }

        );
        console.log('intra aici');
    }

});