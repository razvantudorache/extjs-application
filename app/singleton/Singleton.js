/**
 * Created by Razvan on 03.05.2016.
 */
Ext.define('MyApp.singleton.Singleton', {
    singleton: true,
    
    component: null,
    
    setComponent: function (value) {
        component = value;
    },
    getComponent: function () {
        return component;
    }
});