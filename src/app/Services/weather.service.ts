import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherData } from './app/models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeatherData(cityName: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl), {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.
        XRapidAPIHostHeaderValue)
        .set(environment.XRapidAPIHostHeaderName, environment.
          XRapidAPIHostHeaderValue),
          params: new HttpParams()
          .set('q', cityName)
          .set('units', 'metric')
          .set('mode', 'json')

    }
  }
}
