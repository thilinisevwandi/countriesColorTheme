import { Component, Inject, OnInit, Output ,EventEmitter, Input} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app-service';
import { regionListToken } from '../providers';

@Component({
  selector: 'app-app-filter',
  templateUrl: './app-filter.component.html',
  styleUrls: ['./app-filter.component.css']
})

export class AppFilterComponent implements OnInit {
  regionForm: any;
  isMoreDetailLoaded =  false;
  @Output() getSelectedRegionName = new EventEmitter();
  @Input() isSelectedDarkMode = new EventEmitter();
  isDarkModeEnable = false;
  constructor(
    @Inject(regionListToken) public regionList : any,
    private formBuilder : FormBuilder,
    private appService : AppService,
    public router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.regionForm = this.formBuilder.group({
      regionName : this.formBuilder.control('')
    })
    this.isSelectedDarkMode.subscribe(val=>{
      this.isDarkModeEnable = val;
    })
  }

  getSelectedRegion(){
    let region = this.regionForm.controls.regionName && 
      this.regionForm.controls.regionName.value ? this.regionForm.controls.regionName.value  : '';
      this.getSelectedRegionName.emit(region);
      // if(region){
      //   this.router.navigate([`/region/${region}`])
      // }
  }
}
