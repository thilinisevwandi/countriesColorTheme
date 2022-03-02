import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService, Country } from '../app-service';

@Component({
  selector: 'app-app-item-list',
  templateUrl: './app-item-list.component.html',
  styleUrls: ['./app-item-list.component.css']
})
export class AppItemListComponent implements OnInit {
  isDarkModeEnable = false;

  constructor(private appService: AppService,
    private activatedRoute : ActivatedRoute,
    private router: Router) { }
  countries: Country[] = [];
  isLoadingData = false;
  @Input() selectedRegion  =   new EventEmitter();
  @Input() selectedName = new EventEmitter();
  @Output() enableCountryMoreDetail = new EventEmitter();
  @Input() isSelectedDarkMode = new EventEmitter();

  getAllCountries(){
    this.isLoadingData = true;
    this.countries = [];
    this.appService.getAllCountries().subscribe((res:any)=>{
      this.isLoadingData = false;
      if(res && res.length && !res[0].error){
        this.countries = res;
        this.isLoadingData = false;
      }
    })
  }
  
  getCountryByRegion(region:string){
    this.isLoadingData = true;
    this.countries = [];
    this.appService.getCountriesByRegion(region).subscribe(
      (res:any)=>{
        this.isLoadingData = false;
        if(res && res.length && !res[0].error){
          this.countries = res;
        }
      }
    )
  }
  
  getCountryByName(name:string){
    debugger;
    this.isLoadingData = true;
    this.countries = [];
    this.appService.getCountriesByName(name).subscribe(
      (res:any)=>{
        this.isLoadingData = false;
        if(res && res.length && !res[0].error){
          this.countries = res;  
        }                
      }
    )
  }

  loadCountryMoreDetail(country : Country){
  this.enableCountryMoreDetail.emit(true);
  country.isDarkModeEnable = this.isDarkModeEnable;
   this.router.navigateByUrl('/moreDetail',{state : country})
   
  }

  ngOnInit(): void {
      this.getAllCountries();
      this.selectedRegion.subscribe(val=>{
        if(val){
          this.getCountryByRegion(val)
        }
      })
    this.selectedName.subscribe(val=>{
      if(val){
        this.getCountryByName(val);
      }
    })

    this.isSelectedDarkMode.subscribe(val=>{
      this.isDarkModeEnable = val
    })
  }
}
