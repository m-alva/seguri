import { Component, OnInit } from '@angular/core';
import { ShareService } from '@src/app/services/share.service';

@Component({
  selector: 'app-cai',
  templateUrl: './cai.component.html',
  styleUrls: ['./cai.component.css']
})
export class CaiComponent implements OnInit {

  constructor(
    private share: ShareService,
  ) {
    this.share.title.next("CAI");
  }

  ngOnInit() {
  }

}
