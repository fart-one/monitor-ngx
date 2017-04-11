import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MqttModule, MqttService } from 'ngx-mqtt';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { Config } from './shared/config/env.config';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    MqttModule.forRoot({
      provide: MqttService,
      useFactory: () => new MqttService(Config.MQTT_SERVICE)
    })
  ],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
