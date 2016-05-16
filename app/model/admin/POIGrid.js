/**
 * Created by Razvan on 16.05.2016.
 */
Ext.define('MyApp.model.admin.POIGrid', {
    extend: 'Ext.data.Model', 
    fields: [
        {name: 'name'},
        {name: 'address'},
        {name: 'type'},
        {name: 'phone'},
        {name: 'visited'},
        {name: 'website'},
        {name: 'rating'}
    ]
});