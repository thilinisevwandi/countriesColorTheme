import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countriesColorTheme';
  regionName   = new EventEmitter();
  searchName = new EventEmitter();
  isSwichToDarkMode = new EventEmitter();
  isCountryMoreDetialEnable = false;
  isDarkModeEnable = false;

  onGetRegionName(region:any){
    this.regionName.emit(region) 
  }

  onGetSearchTerm(searchTerm:any){
    this.searchName.emit(searchTerm);
  }

  onEnableCountryMoreDetail(isMoreDetialEnable : boolean){
    this.isCountryMoreDetialEnable = isMoreDetialEnable;
  }

  onSwitchTheme(isDarkMode:boolean){
    this.isDarkModeEnable = isDarkMode;
    this.isSwichToDarkMode.emit(isDarkMode);
  }
}
