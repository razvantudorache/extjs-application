/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.model.users.CommentPanel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'commentDate', type: 'date', dateFormat: 'Y-m-dTH:i:s'},
        {name: 'commentText'}
    ]
});