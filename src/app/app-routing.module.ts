import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'soluciones', component: SolutionsComponent },
  { path: 'contactanos', component: ContactUsComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
