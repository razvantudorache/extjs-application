/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MyApp',

    controllers: [
        'MyApp.controller.Main'

    ],
    
    views: [
        'MyApp.view.Viewport',
        'MyApp.view.CenterContainer',
        'MyApp.view.GoogleView',
        'MyApp.view.RightContainer'
    ],
    
    launch:function(){
        // debugger;
    }
});
