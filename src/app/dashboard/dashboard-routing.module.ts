import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard.component';
import { RefundComponent } from './pages/refund/refund.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'refund',
        component: RefundComponent
      },
      {
        path: 'scheduling',
        component: SchedulingComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
