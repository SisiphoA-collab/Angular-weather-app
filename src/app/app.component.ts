import { Component, OnInit } from '@angular/core'; 
import { WeatherData } from './Services/app/models/weather.model';
import { WeatherService } from 'c:/Users/sisip/weatherApp/src/app/Services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {

  }
  

  cityName: string = 'Cape Town';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getweatherData(this.cityName);
  
  }
    
onsubmit() {
  this.getweatherData(this.cityName);
  this.cityName = '';
}

private getweatherData(cityName: string) {
  this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response: any) => {
        this.weatherData = response;
        console.log(response);

}
    });
  }
}
