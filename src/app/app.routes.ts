import { Routes } from '@angular/router';
import { HomeComponent } from './tabs/home/home.component';
import { AboutComponent } from './tabs/about/about.component';
import { ContactComponent } from './tabs/contact/contact.component';
import { ProjectsComponent } from './tabs/projects/projects.component';
import { SkillsComponent } from './tabs/skills/skills.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];