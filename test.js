var url = "test1.json";
req(url, drawPath);

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
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(initLat, initLng),
        map: map
    });
    
    var path = [];
    for (var i=0; i < length; i++) {
        path.push(new naver.maps.LatLng(lat_list[i].value, lng_list[i].value));
    }
    var polyline = new naver.maps.Polyline({
        map: map,
        path: path,
    });
    console.log()
}

function req(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText);
            callback(myArr);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
