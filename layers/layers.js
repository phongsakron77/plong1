var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "พื้นที่น้ำท่วมซ้ำซาก",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> พื้นที่น้ำท่วมซ้ำซาก'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: "พื้นที่แล้งซ้ำซาก",
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> พื้นที่แล้งซ้ำซาก'
            });
var format_Stream_plong_3 = new ol.format.GeoJSON();
var features_Stream_plong_3 = format_Stream_plong_3.readFeatures(json_Stream_plong_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stream_plong_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stream_plong_3.addFeatures(features_Stream_plong_3);
var lyr_Stream_plong_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stream_plong_3, 
                style: style_Stream_plong_3,
                popuplayertitle: "Stream_plong",
                interactive: true,
                title: '<img src="styles/legend/Stream_plong_3.png" /> Stream_plong'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: "ขอบเขตการปกครอง",
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> ขอบเขตการปกครอง'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: "พื้นที่การใช้ประโยชน์ที่ดิน",
                interactive: true,
    title: 'พื้นที่การใช้ประโยชน์ที่ดิน<br />\
    <img src="styles/legend/_5_0.png" /> พื้นที่เกษตร<br />\
    <img src="styles/legend/_5_1.png" /> พื้นที่ป่าไม้<br />\
    <img src="styles/legend/_5_2.png" /> พื้นที่เบ็ดเตล็ด<br />\
    <img src="styles/legend/_5_3.png" /> พื้นที่ชุมชนและสิ่งปลูกสร้าง<br />\
    <img src="styles/legend/_5_4.png" /> พื้นที่น้ำ<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr_Stream_plong_3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr__1,lyr__2,lyr_Stream_plong_3,lyr__4,lyr__5];
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'tam_nam_t': 'tam_nam_t', 'amphoe_t': 'amphoe_t', 'prov_nam_t': 'prov_nam_t', 'class': 'class', 'fl_desth': 'fl_desth', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'tam_nam_t': 'tam_nam_t', 'amphoe_t': 'amphoe_t', 'prov_nam_t': 'prov_nam_t', 'class': 'class', 'dr_desth': 'dr_desth', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Stream_plong_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'STREAM_': 'STREAM_', 'STREAM_ID': 'STREAM_ID', 'STREAM': 'STREAM', 'STR_CLASS': 'STR_CLASS', 'STR_ORDER': 'STR_ORDER', 'STR_NAME_E': 'STR_NAME_E', 'STR_NAME_T': 'STR_NAME_T', 'STR_CL_E': 'STR_CL_E', 'STR_CL_T': 'STR_CL_T', 'DESCR_T': 'DESCR_T', 'DESCR_E': 'DESCR_E', 'Shape_Leng': 'Shape_Leng', });
lyr__4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TAMBON_IDN': 'TAMBON_IDN', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMPHOE_IDN': 'AMPHOE_IDN', 'AMP_CODE': 'AMP_CODE', 'AMPHOE_T': 'AMPHOE_T', 'AMPHOE_E': 'AMPHOE_E', 'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'REMARK': 'REMARK', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'PROV_NAM_E': 'PROV_NAM_E', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr__5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'recode': 'recode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'area': 'area', 'Rai': 'Rai', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'tam_nam_t': 'TextEdit', 'amphoe_t': 'TextEdit', 'prov_nam_t': 'TextEdit', 'class': 'TextEdit', 'fl_desth': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID': 'TextEdit', 'tam_nam_t': 'TextEdit', 'amphoe_t': 'TextEdit', 'prov_nam_t': 'TextEdit', 'class': 'TextEdit', 'dr_desth': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Stream_plong_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'STREAM_': 'TextEdit', 'STREAM_ID': 'TextEdit', 'STREAM': 'TextEdit', 'STR_CLASS': 'Range', 'STR_ORDER': 'Range', 'STR_NAME_E': 'TextEdit', 'STR_NAME_T': 'TextEdit', 'STR_CL_E': 'TextEdit', 'STR_CL_T': 'TextEdit', 'DESCR_T': 'TextEdit', 'DESCR_E': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr__4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'TAMBON_IDN': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMPHOE_IDN': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'AMPHOE_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'REMARK': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__5.set('fieldImages', {'OBJECTID': 'TextEdit', 'recode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'area': 'TextEdit', 'Rai': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'tam_nam_t': 'no label', 'amphoe_t': 'no label', 'prov_nam_t': 'no label', 'class': 'no label', 'fl_desth': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID': 'no label', 'tam_nam_t': 'no label', 'amphoe_t': 'no label', 'prov_nam_t': 'no label', 'class': 'no label', 'dr_desth': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Stream_plong_3.set('fieldLabels', {'OBJECTID': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'STREAM_': 'no label', 'STREAM_ID': 'no label', 'STREAM': 'no label', 'STR_CLASS': 'no label', 'STR_ORDER': 'no label', 'STR_NAME_E': 'no label', 'STR_NAME_T': 'no label', 'STR_CL_E': 'no label', 'STR_CL_T': 'no label', 'DESCR_T': 'no label', 'DESCR_E': 'no label', 'Shape_Leng': 'no label', });
lyr__4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'TAMBON_IDN': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'inline label - always visible', 'AMPHOE_IDN': 'no label', 'AMP_CODE': 'no label', 'AMPHOE_T': 'no label', 'AMPHOE_E': 'no label', 'PROV_CODE': 'no label', 'PROV_NAM_T': 'header label - always visible', 'REMARK': 'inline label - always visible', 'ORIG_FID': 'no label', 'Shape_Leng': 'no label', 'PROV_NAM_E': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr__5.set('fieldLabels', {'OBJECTID': 'no label', 'recode': 'inline label - always visible', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'area': 'no label', 'Rai': 'inline label - always visible', });
lyr__5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});