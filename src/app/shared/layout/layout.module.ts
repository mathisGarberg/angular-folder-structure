import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [
        NavComponent,
        FooterComponent
    ],
    imports: [
      CommonModule,
      RouterModule
    ],
    exports: [
        NavComponent,
        FooterComponent
    ],
    providers: [],
})
export class LayoutModule { }
