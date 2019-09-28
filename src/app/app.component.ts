import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: Observable<string>;

  constructor(
    private share: ShareService
    ) {
    this.title = this.share.title;
  }
}
