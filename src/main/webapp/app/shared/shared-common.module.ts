import { NgModule } from '@angular/core';

import { ChuckNorrisSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ChuckNorrisSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ChuckNorrisSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ChuckNorrisSharedCommonModule {}
