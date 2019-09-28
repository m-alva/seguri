import { Component, OnInit } from '@angular/core';
import { ShareService } from '@src/app/services/share.service';

@Component({
  selector: 'app-cai',
  templateUrl: './cai.component.html',
  styleUrls: ['./cai.component.scss']
})
export class CaiComponent implements OnInit {

  cais = [
    {longitude: 4.623897, latitude: -74.071725, message: "Cai Teusaquillo."},
    {longitude: 4.631329, latitude: -74.074982, message: "I am a green leaf."},
    {longitude: 4.641707, latitude: -74.074544, message: "I am a green leaf."},
    {longitude: 4.649373, latitude: -74.083134, message: "I am a green leaf."},
  ]

  constructor(
    private share: ShareService,
  ) {
    this.share.title.next("CAI");
  }

  ngOnInit() {
  }

}
