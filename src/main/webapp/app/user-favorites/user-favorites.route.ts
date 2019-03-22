import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { UserFavoritesComponent } from 'app/user-favorites/user-favorites.component';

export const FAVORITES_ROUTE: Route = {
    path: 'favorites',
    component: UserFavoritesComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'My Favorite Jokes'
    },
    canActivate: [UserRouteAccessService]
};
