import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LayoutModule } from './layout/layout.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        LayoutModule,

        NgbModule.forRoot()
    ],
    declarations: [
      ControlMessagesComponent,
      SpinnerComponent
    ],
    exports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,

      LayoutModule,

      NgbModule,

      ControlMessagesComponent,
      SpinnerComponent
    ]
})
export class SharedModule { }
