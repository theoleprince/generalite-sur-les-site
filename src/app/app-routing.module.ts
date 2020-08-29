import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AboutComponent } from './public/general/about/about.component';
import { ContactComponent } from './public/general/contact/contact.component';
import { BloglistComponent } from './public/general/blog/bloglist/bloglist.component';
import { BlogdetailComponent } from './public/general/blog/blogdetail/blogdetail.component';
import { FooterComponent } from './public/general/footer/footer.component';
import { HomeComponent } from './public/general/home/home.component';
import { SigninComponent } from './public/general/signin/signin.component';
import { NotFoundComponent } from './public/general/not-found/not-found.component';


const routes: Routes = [

  //routes des composqnts generaux

  { path: '', component: HomeComponent, },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: '**', component: NotFoundComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
