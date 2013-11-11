Ext.define('DssMobile.view.MixListView', {
    extend: 'Ext.Panel',
    alias: 'widget.mixlistview',
    requires: ['DssMobile.store.Mixes'],
    config: {
        title: 'Mixes',
        iconCls: 'music',
        badgeText: '10',
        layout: 'fit',
        items: [{
            xtype: 'list',
            itemTpl: [
                '<div class="list-item">',
                '    <img class="photo" src="{mix_image}" />',
                '    <h1>{title}</h1>',
                '    <span>{user_name}</span>',
                '</div>'
            ],
            store: 'Mixes',
            onItemDisclosure: true
        }]
    }
});
