import { NgModule } from '@angular/core';

import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';

import { SharedModule } from '@shared/shared.module';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}
