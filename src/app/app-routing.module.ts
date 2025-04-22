import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Import Home Component
import { AboutComponent } from './about/about.component'; // Import About Component
import { ExperienceComponent } from './experience/experience.component'; // Import Experience Component
import { ProjectsComponent } from './project/project.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent }, // Add the Experience route
  { path: 'projects', component: ProjectsComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
