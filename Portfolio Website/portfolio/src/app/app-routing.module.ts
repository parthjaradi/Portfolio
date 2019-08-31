import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component'; 

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'skills',component:SkillsComponent},
  {path:'work',component:WorkComponent},
  {path:'contact',component:ContactComponent},
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AboutComponent,SkillsComponent,WorkComponent,ContactComponent];
