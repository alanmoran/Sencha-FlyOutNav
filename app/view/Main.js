Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: ['Ext.TitleBar'],
    config: {
        id: 'mainContainer',
        autoDestroy: false,
        fullscreen: true,
        items: [{
                xtype: 'sidebar'
            }, {
                xtype: 'titlebar',
                docked: 'top',
                items: [{
                        xtype: 'button',
                        iconCls: 'list',
                        iconMask: true,
                        align: 'left',
                        action: 'navButton',
                        id: 'navBtnFlyOutNav'
                    }
                ]
            }, {
                xtype: 'panel',
                id: 'mainCardPanel',
                height: '100%',
                layout: {
                    type: 'card'
                },
                html:'This is the main card panel.'
            }
        ]
    }

});