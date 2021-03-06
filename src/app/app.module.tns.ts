import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/pages/home/home.component';
import { CaiComponent } from '@src/app/pages/cai/cai.component';
import { AlertsComponent } from '@src/app/pages/alerts/alerts.component';
import { CommunityComponent } from '@src/app/pages/community/community.component';
import { MapNavigatorComponent } from '@src/app/components/map-navigator/map-navigator.component';
import { AlertButtonComponent } from '@src/app/alert-button/alert-button.component';

// import { registerElement } from "nativescript-angular/element-registry";
// registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaiComponent,
    AlertsComponent,
    CommunityComponent,
    MapNavigatorComponent,
    AlertButtonComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
