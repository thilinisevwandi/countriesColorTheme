import { Component, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  isDarkModeEnable = false;

  constructor(private router: Router) { }
  issearchInputDisable = false;
  @Output() getSearchTerm = new EventEmitter();
  @Input() isSelectedDarkMode = new EventEmitter();
  
  ngOnInit(): void {
    this.isSelectedDarkMode.subscribe(val=>{
      this.isDarkModeEnable = val
    })
  }
  getCountryBySearchParam(event : any){
    let searchTerm = event.target.value;
    if(searchTerm){
      // this.router.navigate([`/name/${searchTerm}`]);
      this.getSearchTerm.emit(searchTerm)
    }
  }

}
