import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
import { WeatherStore } from './weather.store';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  constructor(private weatherStore: WeatherStore, private http: HttpService) {}

  async getToday() {
    return await this.http
      .request(
        'GET',
        'https://api.openweathermap.org/data/2.5/weather',
        {
          lat: '-33.2872',
          lon: '19.1434',
          units: 'metric',
          appid: environment.opweather,
        },
        true
      )
      .then((today) => {
        if (today?.main) {
          this.weatherStore.update({ today });
        }
      });
  }

  async getForecast() {
    return await this.http
      .request(
        'GET',
        'https://api.openweathermap.org/data/2.5/forecast/daily',
        {
          lat: '-33.2872',
          lon: '19.1434',
          units: 'metric',
          cnt: '8',
          appid: environment.opweather,
        },
        true
      )
      .then((forecast) => {
        if (forecast?.list) {
          this.weatherStore.update({ forecast });
        }
      });
  }
}
