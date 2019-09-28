import { Component, OnInit } from '@angular/core';
import { ShareService } from '@src/app/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'seguri';

  constructor(
    private share: ShareService,
  ) {
    this.share.title.next("");
  }
  

  ngOnInit() {
  }
}
