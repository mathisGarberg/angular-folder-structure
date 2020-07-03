import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, MaterialModule, SharedModule]
})
export class AboutModule {}
