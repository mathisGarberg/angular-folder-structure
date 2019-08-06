import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { ContactRoutes } from './contact-routing.module';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [ContactComponent],
  imports: [
    ContactRoutes,

    SharedModule
  ]
})
export class ContactModule { }
