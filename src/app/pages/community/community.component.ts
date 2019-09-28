import { Component, OnInit } from '@angular/core';
import { ShareService } from '@src/app/services/share.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(
    private share: ShareService,
  ) {
    this.share.title.next("COMUNIDAD");
  }

  ngOnInit() {
  }

}
