import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BrochureComponent} from "./brochure/brochure.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'brochure', component: BrochureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
