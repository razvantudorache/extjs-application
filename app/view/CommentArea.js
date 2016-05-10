/**
 * Created by Razvan on 27.04.2016.
 */
Ext.define('MyApp.view.CommentArea', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.commentarea',
    
    requires: [
        'MyApp.view.CommentPanel'
    ],
    labelText: {
        title: 'Comments'
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            layout: 'anchor',
            items: [
                {
                    html: '<h2>'+ me.labelText.title +'</h2>',
                    cls: 'mainTitle'
                },
                {
                    xtype: 'commentpanel',
                    url: 'resources/CommentPanel.json'

                },
                {
                    xtype: 'textarea',
                    cls: 'textAreaComment',
                    maxLength: 250,
                    maxLengthText: 'The maximum length for this field is 250 characters',
                    width: 400
                }
            ],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                layout: 'fit',
                items: [
                    {
                        xtype: 'button',
                        text: 'Post comment',
                        handler: function () {

                        }
                    }
                ]
            }]
        });
        me.callParent(arguments);
    }
});
