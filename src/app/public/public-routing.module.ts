import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoktailComponent } from './coktail/coktail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';

const routes: Routes = [

  {
    path:'',component:PlayoutComponent,children:[
      { path:'', redirectTo:'home',pathMatch:'full'},

      { path:'home',component:HomeComponent},
      { path:'cocktail',component:CoktailComponent},
      { path:'contact',component:ContactComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
