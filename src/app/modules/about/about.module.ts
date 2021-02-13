import { NgModule } from '@angular/core';

import { SharedModule } from '@shared/shared.module';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './page/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [AboutRoutingModule, SharedModule]
})
export class AboutModule {}
