import { Component, OnInit, Input } from '@angular/core';

declare let L;

@Component({
  selector: 'app-map-navigator',
  templateUrl: './map-navigator.component.html',
  styleUrls: ['./map-navigator.component.scss']
})
export class MapNavigatorComponent implements OnInit {
  
  @Input('subzones') subzones;

  @Input('cais') cais;

  @Input('enableLocalization') enableLocalization;

  constructor() { }

ngOnInit() {
    const map = L.map('map').setView([4.716029, -74.085809], 13);

    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // });

    //L.tileLayer.provider('Stamen.Watercolor').addTo(map);

    // create a red polygon from an array of LatLng points
    var latlngs = [
        [
            [4.666418, -74.093727],
            [4.653568, -74.083810],
            [4.649709, -74.064640],
            [4.615602, -74.072953],
            [4.624102, -74.079002],
            [4.625832, -74.091595],
            [4.645296, -74.110466]
        ],
        [

        ]
    ];

    if (this.subzones) {
      this.subzones.forEach(zone => {
        L.circle([zone.longitude, zone.latitude], {radius: zone.radius, color: zone.color}).addTo(map);
      });
    }

    var greenIcon = L.icon({
      iconUrl: './assets/icons/cai.svg',
      iconSize:     [38, 95], // size of the icon
    });

    if (this.cais) {
      this.cais.forEach(cai => {
        L.marker([cai.longitude, cai.latitude], {icon: greenIcon}).addTo(map).bindPopup(cai.message);
      });
    }

    if (this.enableLocalization) {
      var groupIcon = L.icon({
        iconUrl: './assets/icons/Group.svg',
        iconSize:     [100, 100],
      });
      map.locate({setView: true, maxZoom: 16});
      
      map.on('locationfound', function(e) {    
        var markerDrag = L.marker(e.latlng,{icon: groupIcon, draggable: true}).addTo(map)
          .bindPopup("I'm here! I'm in Següri!!").openPopup();
  
          var draggable = new L.Draggable(markerDrag);
          draggable.enable();
      });
    }
    
    var polygon = L.polygon(latlngs, {color: '#005AFFA6'}).addTo(map);
    // zoom the map to the polygon
    map.fitBounds(polygon.getBounds());

    L.polygon(latlngs);
  }

}