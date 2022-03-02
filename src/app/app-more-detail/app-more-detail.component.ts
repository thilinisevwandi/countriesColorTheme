import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from '../app-service';

@Component({
  selector: 'app-app-more-detail',
  templateUrl: './app-more-detail.component.html',
  styleUrls: ['./app-more-detail.component.css']
})
export class AppMoreDetailComponent implements OnInit {
  country : any
  isDarkModeEnable = false;
  @Output() getSelectedModeForBack = new EventEmitter();
  @Input() selectedCountry = new EventEmitter();

  constructor(
    private router: Router
  ) { 
    this.country = this.router.getCurrentNavigation()?.extras.state;
    this.country.languages =Object.values(this.country.languages);
    this.country.currencies = Object.keys(this.country.currencies);
    this.country.name.nativeName =this.country.name.nativeName[Object.keys(this.country.name.nativeName)[0]].official;
    this.isDarkModeEnable = this.country.isDarkModeEnable
  }

  ngOnInit(): void {
  }

  backToHomePage(){
    window.location.reload();
  }

}
function output() {
  throw new Error('Function not implemented.');
}

