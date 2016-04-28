/**
 * Created by Razvan on 28.04.2016.
 */
Ext.define('MyApp.view.TextAreaPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.textareapanel',
    
    cls: 'textAreaPanel',
    style: {
        top: 140
    },
    
    initComponent: function () {
        var me = this;
        
        Ext.apply(me, {
            width: '90%',
            items: [
                {
                    xtype: 'textarea',
                    flex: 2,
                    cls: 'textAreaCls'
                }
            ],
            dockedItems: [{
                flex: 1,
                xtype: 'toolbar',
                dock: 'bottom',
                cls: 'toolbarCls',
                items: [
                    {
                        xtype: 'button',
                        text: 'Post the comment',
                        widht: '100%',
                        height: 30,
                        scope: me,
                        handler: function () {
                            debugger;
                            var me = this;
                            var value = me.down('textarea').getValue();
                            var record = {
                                dateComment: '2016.02.03',
                                comment: value
                            };
                            var commentPanel = me.mainParent.down('commentpanel').down('dataview').store.add(record);
                            me.mainParent.down('commentpanel').down('dataview').store.reload();
                        }
                    }
                ]
            }]
        });
        me.callParent(arguments);
    }
});
