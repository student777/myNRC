var url = "test1.json";
req(url, draw);

function draw(res) {
    var initLat = res.metrics[6].values[0].value;
    var initLng = res.metrics[7].values[0].value;
    console.log(initLat, initLng);
    var map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(initLat, initLng),
        zoom: 17
    });
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(initLat, initLng),
        map: map
    });
    
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
