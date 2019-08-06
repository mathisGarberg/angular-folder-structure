import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
];

export const ContactRoutes = RouterModule.forChild(routes);
