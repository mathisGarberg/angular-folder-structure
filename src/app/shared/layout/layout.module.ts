import { NgModule } from '@angular/core';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavComponent,
        FooterComponent
    ],
    imports: [

    ],
    exports: [
        NavComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutModule { }