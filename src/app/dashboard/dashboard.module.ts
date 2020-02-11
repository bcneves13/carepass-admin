import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
/*Material*/
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { TableComponent } from './components/iTable/iTable.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RefundComponent } from './pages/refund/refund.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent,
    TableComponent,
    RefundComponent,
    SchedulingComponent,
    RegistrationComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ]
})
export class DashboardModule { }
