document.addEventListener('DOMContentLoaded', function(){
    maplet = new Maplet(document.getElementById('map'));
    var point = new MPoint('106.82345, 39.68345');
    maplet.centerAndZoom(point, 8);
    var mkr = new MMarker(point, new MIcon('marker.png', 30, 40));
    maplet.addOverlay(mkr);
    var layerDraw = document.getElementById('LayerDrawMap');
    var div = document.createElement('div');
    div.className = 'marker';
    div.innerHTML = '<a href="http://www.ctrip.com/">Ctrip Web site</a>';
    layerDraw.appendChild(div);
}, false);