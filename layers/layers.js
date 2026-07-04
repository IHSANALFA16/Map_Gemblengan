var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleLabels_1 = new ol.layer.Tile({
            'title': 'Google Labels',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}'
            })
        });
var format_BATASDUSUN_DESAGEMBLENGANcopy_2 = new ol.format.GeoJSON();
var features_BATASDUSUN_DESAGEMBLENGANcopy_2 = format_BATASDUSUN_DESAGEMBLENGANcopy_2.readFeatures(json_BATASDUSUN_DESAGEMBLENGANcopy_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDUSUN_DESAGEMBLENGANcopy_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDUSUN_DESAGEMBLENGANcopy_2.addFeatures(features_BATASDUSUN_DESAGEMBLENGANcopy_2);
var lyr_BATASDUSUN_DESAGEMBLENGANcopy_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDUSUN_DESAGEMBLENGANcopy_2, 
                style: style_BATASDUSUN_DESAGEMBLENGANcopy_2,
                popuplayertitle: 'BATAS DUSUN_ DESA GEMBLENGAN copy',
                interactive: true,
    title: 'BATAS DUSUN_ DESA GEMBLENGAN copy<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANcopy_2_0.png" /> Bedilon<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANcopy_2_1.png" /> Gajihan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANcopy_2_2.png" /> Gemblengan<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANcopy_2_3.png" /> Gesing<br />\
    <img src="styles/legend/BATASDUSUN_DESAGEMBLENGANcopy_2_4.png" /> Kasiman<br />' });
var format_JalanDesaGemblengan_3 = new ol.format.GeoJSON();
var features_JalanDesaGemblengan_3 = format_JalanDesaGemblengan_3.readFeatures(json_JalanDesaGemblengan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanDesaGemblengan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanDesaGemblengan_3.addFeatures(features_JalanDesaGemblengan_3);
var lyr_JalanDesaGemblengan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanDesaGemblengan_3, 
                style: style_JalanDesaGemblengan_3,
                popuplayertitle: 'Jalan Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/JalanDesaGemblengan_3.png" /> Jalan Desa Gemblengan'
            });
var format_SUNGAIDesaGemblengan_4 = new ol.format.GeoJSON();
var features_SUNGAIDesaGemblengan_4 = format_SUNGAIDesaGemblengan_4.readFeatures(json_SUNGAIDesaGemblengan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAIDesaGemblengan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAIDesaGemblengan_4.addFeatures(features_SUNGAIDesaGemblengan_4);
var lyr_SUNGAIDesaGemblengan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAIDesaGemblengan_4, 
                style: style_SUNGAIDesaGemblengan_4,
                popuplayertitle: 'SUNGAI Desa Gemblengan',
                interactive: false,
                title: '<img src="styles/legend/SUNGAIDesaGemblengan_4.png" /> SUNGAI Desa Gemblengan'
            });
var lyr_DEMGemblengan_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM Gemblengan<br />\
    <img src="styles/legend/DEMGemblengan_5_0.png" /> 917.2588<br />\
    <img src="styles/legend/DEMGemblengan_5_1.png" /> 1034.3264<br />\
    <img src="styles/legend/DEMGemblengan_5_2.png" /> 1151.3939<br />\
    <img src="styles/legend/DEMGemblengan_5_3.png" /> 1268.4615<br />\
    <img src="styles/legend/DEMGemblengan_5_4.png" /> 1385.5291<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEMGemblengan_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12235783.983318, -817046.881182, 12239724.725076, -814850.577804]
        })
    });
var format_Contours_6 = new ol.format.GeoJSON();
var features_Contours_6 = format_Contours_6.readFeatures(json_Contours_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_6.addFeatures(features_Contours_6);
var lyr_Contours_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_6, 
                style: style_Contours_6,
                popuplayertitle: 'Contours',
                interactive: false,
    title: 'Contours<br />\
    <img src="styles/legend/Contours_6_0.png" /> Minor<br />\
    <img src="styles/legend/Contours_6_1.png" /> mayor<br />' });
var format_BATASDESAGEMBLENGAN_7 = new ol.format.GeoJSON();
var features_BATASDESAGEMBLENGAN_7 = format_BATASDESAGEMBLENGAN_7.readFeatures(json_BATASDESAGEMBLENGAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESAGEMBLENGAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESAGEMBLENGAN_7.addFeatures(features_BATASDESAGEMBLENGAN_7);
var lyr_BATASDESAGEMBLENGAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESAGEMBLENGAN_7, 
                style: style_BATASDESAGEMBLENGAN_7,
                popuplayertitle: 'BATAS DESA GEMBLENGAN',
                interactive: false,
                title: '<img src="styles/legend/BATASDESAGEMBLENGAN_7.png" /> BATAS DESA GEMBLENGAN'
            });
var group_TOPOGRAFI = new ol.layer.Group({
                                layers: [lyr_DEMGemblengan_5,lyr_Contours_6,],
                                fold: 'close',
                                title: 'TOPOGRAFI'});
var group_JalanSungai = new ol.layer.Group({
                                layers: [lyr_JalanDesaGemblengan_3,lyr_SUNGAIDesaGemblengan_4,],
                                fold: 'close',
                                title: 'Jalan Sungai'});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleLabels_1.setVisible(false);lyr_BATASDUSUN_DESAGEMBLENGANcopy_2.setVisible(true);lyr_JalanDesaGemblengan_3.setVisible(true);lyr_SUNGAIDesaGemblengan_4.setVisible(true);lyr_DEMGemblengan_5.setVisible(false);lyr_Contours_6.setVisible(false);lyr_BATASDESAGEMBLENGAN_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleLabels_1,lyr_BATASDUSUN_DESAGEMBLENGANcopy_2,group_JalanSungai,group_TOPOGRAFI,lyr_BATASDESAGEMBLENGAN_7];
lyr_BATASDUSUN_DESAGEMBLENGANcopy_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LCODE': 'LCODE', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Nama Dusun': 'Nama Dusun', 'LUAS HA': 'LUAS HA', });
lyr_JalanDesaGemblengan_3.set('fieldAliases', {'id': 'id', });
lyr_SUNGAIDesaGemblengan_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Contours_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'd': 'd', });
lyr_BATASDUSUN_DESAGEMBLENGANcopy_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LCODE': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Nama Dusun': 'TextEdit', 'LUAS HA': 'TextEdit', });
lyr_JalanDesaGemblengan_3.set('fieldImages', {'id': 'TextEdit', });
lyr_SUNGAIDesaGemblengan_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Contours_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'd': 'TextEdit', });
lyr_BATASDUSUN_DESAGEMBLENGANcopy_2.set('fieldLabels', {'NAMOBJ': 'no label', 'LCODE': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'Nama Dusun': 'no label', 'LUAS HA': 'no label', });
lyr_JalanDesaGemblengan_3.set('fieldLabels', {'id': 'no label', });
lyr_SUNGAIDesaGemblengan_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Contours_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_BATASDESAGEMBLENGAN_7.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'd': 'no label', });
lyr_BATASDESAGEMBLENGAN_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});