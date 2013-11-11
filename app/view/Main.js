Ext.define('DssMobile.view.Main', {
    extend: 'Ext.TabPanel',
    alias: 'widget.mainview',
    requires: [
        'DssMobile.view.MixListView',
        'DssMobile.view.MixDetailView'
    ],

    config: {
        title: 'Deep South Sounds',
        tabBar: {
            docked: 'bottom'
        },
        items: [{
            xtype: 'mixlistview'
        },
        {
            title: 'Users',
            xtype: 'mixlistview',
            iconCls: 'team'
        }]
    }
});
