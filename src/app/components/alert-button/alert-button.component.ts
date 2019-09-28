import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-alert-button",
  templateUrl: "./alert-button.component.html",
  styleUrls: ["./alert-button.component.scss"]
})
export class AlertButtonComponent implements OnInit {
  @Input("text") text;
  @Input("icon") icon;

  constructor() {}

  ngOnInit() {}
}
