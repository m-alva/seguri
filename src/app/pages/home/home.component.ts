import { Component, OnInit } from '@angular/core';
import { ShareService } from '@src/app/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'seguri';

  subzones = [
    {longitude: 4.643824,latitude: -74.073037, radius: 200,color:'#ff0000'},
    {longitude: 4.632898, latitude: -74.078227, radius: 300,color:'#ff0000'},
    {longitude: 4.634556, latitude: -74.068378, radius: 100,color:'#ffff33'},
    {longitude: 4.633914, latitude: -74.089371, radius: 200,color:'#ffff33'}
  ]

  constructor(
    private share: ShareService,
  ) {
    this.share.title.next("Rutas");
  }
  

  ngOnInit() {
  }
}
