import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@app/material/material.module';

import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';

import { HomeRoutingModule } from './home.routing';
import { FlipCardFrontComponent } from './page/project-item/flip-card-front/flip-card-front.component';
import { FlipCardBackComponent } from './page/project-item/flip-card-back/flip-card-back.component';

@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    FlipCardFrontComponent,
    FlipCardBackComponent
  ],
  imports: [SharedModule, HomeRoutingModule, MaterialModule],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
