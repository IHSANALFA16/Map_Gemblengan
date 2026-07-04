var size = 0;
var placement = 'point';
function categories_BATASDUSUN_DESAGEMBLENGANcopy_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Bedilon':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,183,55,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(200,181,12,0.3568627450980392)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Gajihan':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,183,55,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(153,235,142,0.396078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Gemblengan':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,183,55,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(73,223,208,0.2901960784313726)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Gesing':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,183,55,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(239,18,40,0.4)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Kasiman':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,183,55,1.0)', lineDash: [12.54,2.508], lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(212,68,228,0.3333333333333333)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_BATASDUSUN_DESAGEMBLENGANcopy_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Nama Dusun");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Nama Dusun") !== null) {
        labelText = String(feature.get("Nama Dusun"));
    }
    
    var style = categories_BATASDUSUN_DESAGEMBLENGANcopy_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
