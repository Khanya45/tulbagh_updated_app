import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { WeatherQuery, WeatherService } from 'src/app/stores/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  constructor(
    private modalCtrl: ModalController,
    public weather: WeatherQuery,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.weatherService.getForecast();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }
}
