import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { FirstComponent } from './first/first.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent, 
    children: [
    {
      path: 'child-a', // child route path
      component: ChildAComponent, // child route component that the router renders
    },
    {
      path: 'child-b',
      component: ChildBComponent, // another child route component that the router renders
    },
  ] },
  { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
