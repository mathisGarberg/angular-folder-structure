import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    AboutRoutingModule,

    SharedModule
  ]
})
export class AboutModule { }
