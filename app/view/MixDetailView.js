Ext.define('DssMobile.view.MixDetailView', {
    extend: 'Ext.Panel',
    alias: 'widget.mixdetailview',
    requires: ['Ext.XTemplate', 'Ext.Button', 'Ext.Audio'],
    config: {
        styleHtmlContent: true,
        tpl: new Ext.XTemplate([           
            '<tpl for=".">',
            '<div class="header">',
            '<div class="avatar" style="background-image: url({mix_image});"></div>',
            '<h3>{title}</h3>',
            '<h4>{user_name}</h4>',
            '</div>',
            '<div class="player-container">',
            '<div class="play-button" id="play-button"></div>',
            '<img class="waveform" src="{waveform_url}">',
            '</div>',
            '<div class="description-container">',
            '<p>{description}</p>',
            '</div>',
            '</tpl>'
        ]),
        listeners: {
            painted: function(){
                console.log("Painted");
                new Ext.Button({
                    text:'Button',
                    cls: 'play-button-button',
                    ui:'action',
                    renderTo:'play-button'
                });            
            }
        }
    }
});