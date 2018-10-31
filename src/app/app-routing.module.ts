import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'userLogin', loadChildren: './user-login/user-login.module#UserLoginPageModule' }
=======
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'reports', loadChildren: './reports/reports.module#ReportsPageModule' }
>>>>>>> 9e601894d2119827ddf2e3f5a43849ac795050da

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
