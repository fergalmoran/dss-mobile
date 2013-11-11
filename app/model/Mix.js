Ext.define('DssMobile.model.Mix', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'title'
            },
            {
                name: 'description'
            },
            {
                name: 'slug'
            },
            {
                name: 'user_name'
            },
            {
                name: 'mix_image'
            },
            {
                name: 'waveform_url'
            }
        ],
        proxy: {
            type: 'rest',
            url: 'http://www.deepsouthsounds.com/api/v1/mix/',
            appendId: false
        }
    }
});
