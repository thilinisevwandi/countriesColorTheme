import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  @Output() toggleThemeColor = new EventEmitter();
  @Input() isSelectedDarkMode = new EventEmitter();

  constructor() { }
  isDarkModeEnable = false;
  ngOnInit(): void {
    this.isSelectedDarkMode.subscribe(val=>{
      this.isDarkModeEnable = val;
    })
  }
  toggleMode(){
    this.isDarkModeEnable = !this.isDarkModeEnable;
    this.toggleThemeColor.emit(this.isDarkModeEnable);
  }
}
