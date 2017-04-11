import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MqttMessage, MqttService } from 'ngx-mqtt';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  public myOtherMessage$: Observable<MqttMessage>;
  public myMessage: string;

  constructor(private _mqttService: MqttService) {
    this._mqttService.connect();

    this._mqttService.onReconnect.subscribe(() => {
      console.log('reconnect');
    });

    this._mqttService.onError.subscribe(() => {
      console.log('error');
    });


  }

  ngOnInit(): void {

    this._mqttService.onConnect.subscribe(() => {
      console.log('connected');
      this._mqttService.observe('toilet/#').subscribe((message: MqttMessage) => {

        console.log(message.payload.toString());
        this.myMessage = message.payload.toString();
      });
      this.myOtherMessage$ = this._mqttService.observe('my/other/topic');
    });

  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: false});
  }

}
