Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            navBtn: 'button[action=navButton]',
            sidebar: 'sidebar',
            mainContainer: 'main',
            mainCardPanel: 'panel[id=mainCardPanel]',
            navList: 'list[id=flyOutNav]'
        },
        control: {
            navBtn: {
                tap: 'toggleSidebar'
            },
            navList: {
                itemtap: 'onItemSelect'
            },
            mainCardPanel: {
                activeitemchange: 'handleCardActiveItemChange'
            }
        }
    },
    toggleSidebar: function() {
        var me = this;
        var sidebar = me.getSidebar();
        if (sidebar.getWidth() === 0) {
            me.showSidebar();
        } else {
            me.hideSidebar();
        }
    },
    showSidebar: function() {
        var cardPanel = this.getMainCardPanel();
        var mainContainer = this.getMainContainer();

        var sidebar = this.getSidebar();
        sidebar.deselectAll();
        sidebar.setWidth('88%');
        sidebar.width = '88%';
        cardPanel.hide();
    },
    hideSidebar: function() {
        var cardPanel = this.getMainCardPanel();
        cardPanel.show();

        var sidebar = this.getSidebar();
        sidebar.deselectAll();
        sidebar.setWidth(0);
        sidebar.width = 0;
        sidebar.refresh();
    },
    handleCardActiveItemChange: function(container, value, oldValue, eOpts) {
        setTimeout(function() {
            if (oldValue) {
                container.remove(oldValue, true);
            }
        }, 250);
    },
    onItemSelect: function(list, index, node, record, event) {
        var me = this;
        var cardPanel = this.getMainCardPanel();
        var panel = Ext.create('Ext.Panel', {
            layout: 'fit',
            html: record.data.title + ' Panel Added!'
        });
        cardPanel.setActiveItem(panel);

        me.hideSidebar();
    }

});