import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MqttModule } from 'ngx-mqtt';

// import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { ToiletBrokerService } from './shared/toilet-broker/index';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    // AlertModule.forRoot(),
    AboutModule,
    HomeModule,
    BrowserAnimationsModule,
    SharedModule.forRoot(),
    MqttModule.forRoot({
      provide: ToiletBrokerService,
      useFactory: () => new ToiletBrokerService()
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
