import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

import { PropertyComponent } from './master/property/property/property.component';
import { EnquiryComponent } from './master/enquiry/enquiry/enquiry.component';
import { roleGuardGuard } from './shared/role-guard.guard';
import { LoginComponent } from './login/login.component';
import { SideNavbarComponent } from './components/layout/side-navbar/side-navbar.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { MainShellComponent } from './components/layout/main-shell/main-shell.component';
import { RoleFunctionComponent } from './master/role-mapping/role-function/role-function.component';
import { BlogComponent } from './master/blog/blog.component';



const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
    
  },
  {
    path: 'rolemapping',
    component: RoleFunctionComponent,
    canActivate: [roleGuardGuard]
  },
  {
    path: 'blog',
    component: BlogComponent,
    canActivate: [roleGuardGuard]
    },
  {
    path: "",
    component: MainShellComponent,
    canActivate: [roleGuardGuard]
    
  },

  {
    path: 'footer',
    component: FooterComponent,
  },
  {
  path: 'enquiry',
  component: EnquiryComponent,
    canActivate: [roleGuardGuard],
    data: ['admin']
},
{
  path: 'property',
  component: PropertyComponent,
    canActivate: [roleGuardGuard],
  },
    
  {
    path: '**',
    component:LoginComponent ,
    canActivate: [roleGuardGuard]
    },
]; 



@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
