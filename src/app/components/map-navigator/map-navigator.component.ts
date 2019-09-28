import { Component, OnInit } from '@angular/core';

declare let L;

@Component({
  selector: 'app-map-navigator',
  templateUrl: './map-navigator.component.html',
  styleUrls: ['./map-navigator.component.scss']
})
export class MapNavigatorComponent implements OnInit {

  constructor() { }

ngOnInit() {
    const map = L.map('map').setView([4.716029, -74.085809], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
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

    
    L.circle([4.643824, -74.073037], {radius: 200,color:'#ff0000'}).addTo(map);
    L.circle([4.632898, -74.078227], {radius: 300,color:'#ff0000'}).addTo(map);
    L.circle([4.634556, -74.068378], {radius: 100,color:'#ffff33'}).addTo(map);
    L.circle([4.633914, -74.089371], {radius: 200,color:'#ffff33'}).addTo(map);

    // var latlngs =[
    //     [ // first polygon
    //         [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]], // outer ring
    //         [[37.29, -108.58],[40.71, -108.58],[40.71, -102.50],[37.29, -102.50]], // hole
    //     ],
    //     [ // second polygon
    //         [[41, -111.03],[45, -111.04],[45, -104.05],[41, -104.05]]
    //       ]
    // ];
    
    var polygon = L.polygon(latlngs, {color: '#005AFFA6'}).addTo(map);
    // zoom the map to the polygon
    map.fitBounds(polygon.getBounds());

    L.polygon(latlngs);
  }

}