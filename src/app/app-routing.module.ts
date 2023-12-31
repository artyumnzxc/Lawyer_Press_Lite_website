import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path: '',
   loadChildren: ()=> import('./general/general.module').then((module)=> module.GeneralModule),
 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
