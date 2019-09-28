import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  public title = new BehaviorSubject<string>("");
  constructor() {
  }
}
