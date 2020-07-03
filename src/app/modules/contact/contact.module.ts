import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

import { ContactRoutes } from './contact-routing.module';
import { ContactComponent } from './page/contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [ContactRoutes, MaterialModule, SharedModule]
})
export class ContactModule {}
