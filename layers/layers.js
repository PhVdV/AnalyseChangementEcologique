var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_CartoWebTOPOIGN_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'CartoWeb - TOPO IGN<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/CartoWebTOPOIGN_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492057.926777, 6550256.296529, 495289.936880, 6552013.949589]
        })
    });
var lyr_HeatMap2023_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2023<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2023_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.169340, 6550349.603703, 494777.583462, 6551916.814705]
        })
    });
var lyr_HeatMap2022_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2022<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2022_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.172301, 6550349.569961, 494777.586578, 6551916.938646]
        })
    });
var lyr_HeatMap2021_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2021<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2021_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.178797, 6550349.634594, 494777.592930, 6551916.845605]
        })
    });
var lyr_HeatMap2020_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2020<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2020_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.236497, 6550349.628859, 494777.650639, 6551916.839883]
        })
    });
var lyr_HeatMap2019_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2019<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2019_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.177063, 6550349.628447, 494777.591194, 6551916.839456]
        })
    });
var lyr_HeatMap2018_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2018<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2018_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.090320, 6550349.692226, 494777.661712, 6551916.903386]
        })
    });
var lyr_HeatMap2017_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2017<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2017_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.169340, 6550349.603703, 494777.583462, 6551916.814705]
        })
    });
var lyr_HeatMap2015_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2015<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2015_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.096998, 6550349.584381, 494777.668364, 6551916.795522]
        })
    });
var lyr_HeatMap2006_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2006<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2006_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.128950, 6550349.628965, 494777.700334, 6551916.840124]
        })
    });
var lyr_HeatMap2001_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 2001<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap2001_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.141413, 6550349.683818, 494777.712814, 6551916.894990]
        })
    });
var lyr_HeatMap1990_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'HeatMap - 1990<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HeatMap1990_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [492570.198012, 6550349.676827, 494777.612159, 6551916.887850]
        })
    });
var format_RNDGenappe_13 = new ol.format.GeoJSON();
var features_RNDGenappe_13 = format_RNDGenappe_13.readFeatures(json_RNDGenappe_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RNDGenappe_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RNDGenappe_13.addFeatures(features_RNDGenappe_13);
var lyr_RNDGenappe_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RNDGenappe_13, 
                style: style_RNDGenappe_13,
                popuplayertitle: 'RND Genappe',
                interactive: true,
                title: '<img src="styles/legend/RNDGenappe_13.png" /> RND Genappe'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CartoWebTOPOIGN_1.setVisible(false);lyr_HeatMap2023_2.setVisible(false);lyr_HeatMap2022_3.setVisible(false);lyr_HeatMap2021_4.setVisible(false);lyr_HeatMap2020_5.setVisible(false);lyr_HeatMap2019_6.setVisible(false);lyr_HeatMap2018_7.setVisible(false);lyr_HeatMap2017_8.setVisible(false);lyr_HeatMap2015_9.setVisible(false);lyr_HeatMap2006_10.setVisible(false);lyr_HeatMap2001_11.setVisible(false);lyr_HeatMap1990_12.setVisible(false);lyr_RNDGenappe_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CartoWebTOPOIGN_1,lyr_HeatMap2023_2,lyr_HeatMap2022_3,lyr_HeatMap2021_4,lyr_HeatMap2020_5,lyr_HeatMap2019_6,lyr_HeatMap2018_7,lyr_HeatMap2017_8,lyr_HeatMap2015_9,lyr_HeatMap2006_10,lyr_HeatMap2001_11,lyr_HeatMap1990_12,lyr_RNDGenappe_13];
lyr_RNDGenappe_13.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'name': 'name', });
lyr_RNDGenappe_13.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'name': 'TextEdit', });
lyr_RNDGenappe_13.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'name': 'no label', });
lyr_RNDGenappe_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});