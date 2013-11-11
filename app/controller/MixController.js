Ext.define('DssMobile.controller.MixController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview'
        },
        control: {
            list: {
                disclose: 'onDisclose',
                itemtap: 'showDetail'
            }
        }
    },
    onDisclose: function(list, record, target, index) {
        return false;
    },
    showDetail: function (list, index, target, record) {
        this.getMain().push({
            xtype: 'mixdetailview',
            title: record.data.title,
            data: record.data
        });
    }
});
