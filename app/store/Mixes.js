Ext.define('DssMobile.store.Mixes', {
    extend: 'Ext.data.Store',

    requires: [
        'DssMobile.model.Mix'
    ],

    config: {
        model: 'DssMobile.model.Mix',
        storeId: 'Mixes',
        /*
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'http://www.deepsouthsounds.com/api/v1/mix/',
            reader: {
                type: 'json',
                rootProperty: 'objects'
            }
        }
        */
        data: [
        {
            "can_edit": false,
            "comment_count": 0,
            "comments": [],
            "description": "Or Something\r\n\r\nFeeling very lazy!!\r\nYe'll know most of them anyway like...don't bust my balls\r\n\r\nJeezzzz.........Tough crowd\r\n\r\n\r\n\r\n\r\nBallbreakers\r\n",
            "download_allowed": false,
            "download_count": 0,
            "duration": 4843,
            "favourite_count": 0,
            "favourited": false,
            "favourites": [],
            "genre-list": [
                {
                    "id": 39,
                    "slug": "classic_house",
                    "text": "Classic House"
                }
            ],
            "id": 306,
            "is_featured": true,
            "item_url": "/mix/all-those-memories",
            "like_count": 0,
            "liked": false,
            "likes": [],
            "mix_image": "http://t-media.deepsouthsounds.com//cache/8c/b0/8cb00b4d40c10242b9eeb0c51c79cc0c.jpg",
            "play_count": 12,
            "resource_uri": "/api/v1/mix/all-those-memories/",
            "slug": "all-those-memories",
            "title": "All those Memories",
            "tooltip": "1. Or Something<br />2. <br />3. Feeling very lazy!!<br />4. Ye'll know most of them anyway like...don't bust my balls<br />5. <br />6. ",
            "uid": "0e48fdfa-cc8b-4863-bb79-f9b640f62594",
            "user_name": "Jamie Sullivan",
            "user_profile_image": "http://graph.facebook.com/725656383/picture?type=large",
            "user_profile_url": "user/jamiethedeep",
            "waveform_generated": true,
            "waveform_url": "http://t-waveforms.deepsouthsounds.com/0e48fdfa-cc8b-4863-bb79-f9b640f62594.png"
        },
        {
            "can_edit": false,
            "comment_count": 0,
            "comments": [],
            "description": "1.Matt Tolfrey feat Marshall Jefferson -The Truth\n2.Harry Wolfman - Ghost Notes\n3.Herbert - Leave Me Now\n4.25Places - Reference Two\n5.Aeromaschine - Fawn\n6.AtJazz - Facet of Jazz\n7.Atmosphere -Dancing In Outer Space (Maw mix)\n8.A:xus -Calling You (Mood 2 Swing)\n9.Azymuth - Space Carnival\n10.Cajmere - Brighter Days",
            "download_allowed": false,
            "download_count": 0,
            "duration": 3684,
            "favourite_count": 0,
            "favourited": false,
            "favourites": [],
            "genre-list": [
                {
                    "id": 37,
                    "slug": "deep_house",
                    "text": "Deep House"
                },
                {
                    "id": 38,
                    "slug": "house",
                    "text": "House"
                },
                {
                    "id": 39,
                    "slug": "classic_house",
                    "text": "Classic House"
                }
            ],
            "id": 305,
            "is_featured": true,
            "item_url": "/mix/dss-on-deepvibes-radio-07-11",
            "like_count": 0,
            "liked": false,
            "likes": [
                "/api/v1/user/16/"
            ],
            "mix_image": "http://t-media.deepsouthsounds.com//cache/5e/81/5e81a5de9d801990e6d7f757beeb78cd.jpg",
            "play_count": 28,
            "resource_uri": "/api/v1/mix/dss-on-deepvibes-radio-07-11/",
            "slug": "dss-on-deepvibes-radio-07-11",
            "title": "DSS On DeepVibes Radio 07-11",
            "tooltip": "1.Matt Tolfrey feat Marshall Jefferson -The Truth<br />2.Harry Wolfman - Ghost Notes<br />3.Herbert - Leave Me Now<br />4.25Places - Reference Two<br />5.Aeromaschine - Fawn<br />",
            "uid": "26f1ca14-5ba6-4f1e-9c02-a8141254157d",
            "user_name": "Fergal Moran",
            "user_profile_image": "http://t-media.deepsouthsounds.com/avatars/2_4.jpg",
            "user_profile_url": "user/fergalmoran",
            "waveform_generated": true,
            "waveform_url": "http://t-waveforms.deepsouthsounds.com/26f1ca14-5ba6-4f1e-9c02-a8141254157d.png"
        },
        {
            "can_edit": false,
            "comment_count": 0,
            "comments": [],
            "description": "The first 90 minutes are City Fly's Jonna and J'Shez back to back followed by a 30 minute mix from Kez YM\n\nhttps://www.facebook.com/kezym.official\n\nSince its inception over 8 years ago, Leicester-based club night City Fly has concocted an alchemy of sounds that have drenched the city in the deeper, soulful and techier shades of house ' simultaneously revitalising the city's nightscape and gaining a reputation as being one of the finest underground house nights in The Midlands. Not content in hosting some of the finest purveyors of house including Motor City Drum Ensemble, Space Dimension Controller, Red Rack'em, Boe Recordings' Ben Parkinson and Secretsundaze's Giles Smith, City Fly has metamorphosed into an all-encompassing club brand, incorporating both national and international residencies and a bi-weekly radio show ' City Fly Radio on www.myhouseyourhouse.net. Now expanding their vision further, City Fly HQ promises to be a nexus of activity over the coming months with the birth of their new label, City Fly Records. Wanting to showcase the sounds synonymous with their ethos, City Fly have fully represented the house spectrum with their debut 'Visions EP' release ' featuring not one but four artists to give a varying flavour to the house palette..\n\nTo book City Fly DJ's / Label Parties please contact -\n\njames@moreaboutmusic.com",
            "download_allowed": true,
            "download_count": 18,
            "duration": 7272,
            "favourite_count": 0,
            "favourited": false,
            "favourites": [],
            "genre-list": [
                {
                    "id": 84,
                    "slug": "deepvibes_radio",
                    "text": "Deepvibes Radio"
                },
                {
                    "id": 157,
                    "slug": "city_fly",
                    "text": "city fly"
                },
                {
                    "id": 158,
                    "slug": "dream_drums_sunday_sessions_2",
                    "text": "dream drums - sunday sessions"
                },
                {
                    "id": 159,
                    "slug": "kez_ym",
                    "text": "Kez YM"
                },
                {
                    "id": 160,
                    "slug": "jonna",
                    "text": "Jonna"
                },
                {
                    "id": 161,
                    "slug": "jshez",
                    "text": "J'Shez"
                }
            ],
            "id": 300,
            "is_featured": true,
            "item_url": "/mix/dream-drums-city-fly-takeover-inc-a-mix-from-kez-y",
            "like_count": 0,
            "liked": false,
            "likes": [
                "/api/v1/user/99/"
            ],
            "mix_image": "http://t-media.deepsouthsounds.com//cache/61/ca/61ca77cf7a3a9ac854c26fdb7c7b458e.jpg",
            "play_count": 20,
            "resource_uri": "/api/v1/mix/dream-drums-city-fly-takeover-inc-a-mix-from-kez-y/",
            "slug": "dream-drums-city-fly-takeover-inc-a-mix-from-kez-y",
            "title": "Dream Drums - City Fly Takeover (inc. a mix from Kez YM)",
            "tooltip": "1. The first 90 minutes are City Fly's Jonna and J'Shez back to back followed by a 30 minute mix from Kez YM<br />2. <br />3. https://www.facebook.com/kezym.official<br />4. <br />5. Since its inception over 8 years ago, Leicester-based club night City Fly has concocted an alchemy of sounds that have drenched the city in the deeper, soulful and techier shades of house ' simultaneously revitalising the city's nightscape and gaining a reputation as being one of the finest underground house nights in The Midlands. Not content in hosting some of the finest purveyors of house including Motor City Drum Ensemble, Space Dimension Controller, Red Rack'em, Boe Recordings' Ben Parkinson and Secretsundaze's Giles Smith, City Fly has metamorphosed into an all-encompassing club brand, incorporating both national and international residencies and a bi-weekly radio show ' City Fly Radio on www.myhouseyourhouse.net. Now expanding their vision further, City Fly HQ promises to be a nexus of activity over the coming months with the birth of their new label, City Fly Records. Wanting to showcase the sounds synonymous with their ethos, City Fly have fully represented the house spectrum with their debut 'Visions EP' release ' featuring not one but four artists to give a varying flavour to the house palette..<br />6. ",
            "uid": "0bd243f8-8cf6-487e-8400-3faa8b00898c",
            "user_name": "GP's House",
            "user_profile_image": "http://graph.facebook.com/666691975/picture?type=large",
            "user_profile_url": "user/gp",
            "waveform_generated": true,
            "waveform_url": "http://t-waveforms.deepsouthsounds.com/0bd243f8-8cf6-487e-8400-3faa8b00898c.png"
        }
    ],
    }
});