import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'navbar',component:NavbarComponent},
{path:'Profile/:name/:id',component:ProfileComponent},
{path:'**',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
