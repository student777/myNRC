import data from './test2.json';

drawPath(data);

function drawPath(res) {
    var lat_list = res.metrics[6].values;
    var lng_list = res.metrics[7].values;
    var length = lat_list.length;
    var initLat = lat_list[0].value;
    var initLng = lng_list[0].value;
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(initLat, initLng),
        zoom: 15,
    });

    // Set marker
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(initLat, initLng),
        map: map
    });
    
    // Set path
    var path = [];
    for (var i=0; i < length; i++) {
        path.push(new naver.maps.LatLng(lat_list[i].value, lng_list[i].value));
    }
    var polyline = new naver.maps.Polyline({
        map: map,
        path: path,
    });


    // Set infoWindow
    var infoWindow = new naver.maps.InfoWindow({
        content: [
            '거리:',
            res.summaries[0].value.toFixed(2),
            '시간:',
            (res.active_duration_ms / (60 * 1000)).toFixed(2),
            '페이스:',
            res.summaries[9].value.toFixed(2),
        ].join(' ')
    });
    infoWindow.open(map, new naver.maps.LatLng(initLat, initLng));
}

