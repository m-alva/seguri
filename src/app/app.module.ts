import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/pages/home/home.component';
import { CaiComponent } from '@src/app/pages/cai/cai.component';
import { AlertsComponent } from '@src/app/pages/alerts/alerts.component';
import { CommunityComponent } from '@src/app/pages/community/community.component';
import { ShareService } from '@src/app/services/share.service';
import { MapNavigatorComponent } from '@src/app/components/map-navigator/map-navigator.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CaiComponent,
    AlertsComponent,
    CommunityComponent,
    MapNavigatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    ShareService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
