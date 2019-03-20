import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { ChuckNorrisSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { DASHBOARD_ROUTE } from './dashboard.route';

@NgModule({
    declarations: [DashboardComponent],
    imports: [ChuckNorrisSharedModule, RouterModule.forChild([DASHBOARD_ROUTE])],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
