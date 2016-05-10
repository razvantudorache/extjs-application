/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.model.CommentPanel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'commentDate', type: 'date'},
        {name: 'commentText'}
    ]
});