import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAppComponent } from './app2/userapp.component';
import { AdminAppComponent } from './app/Adminapp.component';
import { AuthGuard } from './app/auth/auth.guard';


const routes: Routes = [
  { path: 'User', component: UserAppComponent },
  // { path: 'Admin', loadChildren: './AdminAppModule/Adminapp.Module#AdminAppModule' },

  { path: 'Admin', component: AdminAppComponent,canActivate:[AuthGuard]},
  { path : '', redirectTo:'/User', pathMatch : 'full'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
