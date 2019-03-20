import { Route } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { UserRouteAccessService } from 'app/core';

export const DASHBOARD_ROUTE: Route = {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Chuck Norris Dashboard'
    },
    canActivate: [UserRouteAccessService]
};
