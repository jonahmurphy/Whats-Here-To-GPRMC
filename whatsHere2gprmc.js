/* 
    Copyright (C) 2012  Jonah Murphy

	This program is free software; you can redistribute it and/or
	modify it under the terms of the GNU General Public License
	as published by the Free Software Foundation; either version 2
	of the License, or (at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program; if not, write to the Free Software
	Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

var map;
var markers = new Array();
var time = false;
var date = false;

google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapDiv = document.getElementById('map');
    map = new google.maps.Map(mapDiv, {
      center: new google.maps.LatLng(53, -9.05),
      zoom: 6,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    google.maps.event.addListener(map, 'click', addMarker);
}

function addMarker(p) {
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;


    if(date == "" || time == "") {
        alert("Enter time and date in UTC format");
    }else {
        var marker = new google.maps.Marker({position:p.latLng, title: (markers.length+1).toString()});
        marker.setMap(map);
        markers.push(marker);
        document.getElementById("GPRMC").value += decCoords2GPRMC(p.latLng, time,date) + "\n";
        document.getElementById("decDeg").value += p.latLng.lat().toFixed(4).toString() +',' + p.latLng.lng().toFixed(4).toString() + "\n";
    }
}

//Format latitude for GPRMC sentence
function formatLat(lat) {
    if(lat > 0)
        return lat.toString()+',N';
    else
        return lat.toString()+',S';
}

//Format longitute for GPRMC sentence
function formatLon(lon) {
    if(lon < 0)
        return lon.toString()+',W';
    else
        return lon.toString()+',E';
}

//Create a GPRMC Sentence from the cordinates, time and date
function decCoords2GPRMC(latlng, time, date) {
    var lat = DD2DM( latlng.lat());
    var lng = DD2DM( latlng.lng());

    lat = formatLat(lat.toFixed(4));
    lng = formatLon(lng.toFixed(4));

    return '$GPRMC,'+time+',A,'+lat +','+lng+',,,'+date+',,,A*89';
}


//convert degrees decimal 2 degress minutes format
function  DD2DM(DegreesDec) {
    var signChanged = false;

    DegreesDec = parseFloat(DegreesDec);

    if(DegreesDec < 0) {
        DegreesDec = Math.abs(DegreesDec);
        signChanged = true;
    }

    var dd = Math.floor(DegreesDec);
    var mmDot = (DegreesDec%1) * 60;
    var ddmmDotmm = dd*100 + mmDot;

    if (signChanged) {
        ddmmDotmm *= -1;
    }
    return ddmmDotmm;
}


//Reset app 
//i.e Remove all polygons and clear the textarea
function reset() {
    document.getElementById("GPRMC").value = " ";
    document.getElementById("decDeg").value = " ";

    if (markers) {
        for (i in markers) {
            markers[i].setMap(null);
        }
    }
    markers = new Array();
}

