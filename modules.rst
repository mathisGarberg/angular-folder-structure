Module Directory
================

`~/src/app/module <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/app/module>`_

The modules directory contains a collection of modules which are each
independent of each other.  This allows Angular to load only the module it
requires to display the request thereby saving bandwidth and speeding the
entire application.

In order to accomplish this each module must have its own routing which is a
``loadChildren`` route resource defined in the ``AppRoutingModule``.  This is
also covered in the `layout documentation <layout.html>`_

A route can have children and each child can have a loadChildren property.
From ``app-routing.module.ts``:

.. code-block:: ts

  {
    path: '',
    component: ContentLayoutComponent,
    canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
    children: [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./modules/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'about',
      loadChildren: () =>
        import('./modules/about/about.module').then(m => m.AboutModule)
    },
    {
      path: 'contact',
      loadChildren: () =>
        import('./modules/contact/contact.module').then(m => m.ContactModule)
    }
    ]
  },

Each child must have its own base path from which it can load children from a
module in the ``modules`` directory.  Here is the routing for the About page:

.. code-block:: ts

  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';

  import { AboutComponent } from './pages/about/about.component';

  const routes: Routes = [
    {
      path: '',
      component: AboutComponent
    }
  ];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AboutRoutingModule { }

It is necessary to add the child routes to the RouterModule
through ``forChild``.

Besides routing any module inside the ``modules`` directory can be as simple or
complicated as you wish.


Install
-------

::

  mkdir src/app/modules

For each new module run ``ng generate module modules/NewModule``


.. include:: footer.rst
