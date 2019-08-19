import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';
import { ContactRoutes } from './contact-routing.module';
import { ContactComponent } from './page/contact/contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutes,

    SharedModule
  ]
})
export class ContactModule { }
