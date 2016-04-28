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
                        text: 'Send the comment',
                        widht: '100%',
                        height: 30
                    }
                ]
            }]
        });
        me.callParent(arguments);
    }
});
