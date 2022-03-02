import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppItemListComponent } from './app-item-list/app-item-list.component';
import { AppMoreDetailComponent } from './app-more-detail/app-more-detail.component';
import { Country } from './app-service';

const routes: Routes = [
  // {
  //   path:'',component:AppItemListComponent
  // },
  {
    path:'all',component:AppItemListComponent
  },
  {
    path:'region/:region',component:AppItemListComponent
  },
  {
    path:'name/:name',component:AppItemListComponent
  },
  {
    path:'moreDetail',component:AppMoreDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
