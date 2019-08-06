import { NgModule } from '@angular/core';

import { MyModalComponent } from './modals/my-modal.component';

import { HomeComponent } from './pages/home.component';
import { HomeRoutingModule } from './home.routing';

import { SharedModule } from '@app/shared';
import { ProjectItemComponent } from './pages/project-item/project-item.component';
import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

@NgModule({
    declarations: [
        HomeComponent,
        MyModalComponent,
        ProjectItemComponent,
        ProjectDetailsComponent
    ],
    imports: [
        SharedModule,

        HomeRoutingModule
    ],
    exports: [],
    providers: [],
    entryComponents: [MyModalComponent]
})
export class HomeModule {}
