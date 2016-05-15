/**
 * Created by Razvan on 06.05.2016.
 */
Ext.define('MyApp.model.users.RightPanel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'name'},
        {name: 'address'},
        {name: 'phone'},
        {name: 'openNow'},
        {name: 'website'},
        {name: 'rating'},
        {name: 'openingHours'}
    ]
});