import { NgModule } from '@angular/core';
import { ChuckNorrisSharedModule } from 'app/shared';
import { RouterModule } from '@angular/router';
import { FAVORITES_ROUTE } from 'app/user-favorites/user-favorites.route';
import { UserFavoritesComponent } from 'app/user-favorites/user-favorites.component';

@NgModule({
    declarations: [UserFavoritesComponent],
    imports: [ChuckNorrisSharedModule, RouterModule.forChild([FAVORITES_ROUTE])]
})
export class UserFavoritesModule {}
