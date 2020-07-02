Layout Directory
================

`~/src/app/layout <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/app/layout>`_
and/or
``~/src/custom-module/layout``

The layout directory contains one or more components which act as a layout or
are parts of a layout such as a Header, Nav, Footer, etc. and
have a:

.. code-block:: html

  <router-outlet></router-outlet>

in the html for other components to embed within.  By convention the
``app.component.html`` in the ``app`` module acts as the top level layout for
the entire application.  From this top level you may embed other layouts which
in turn embed other components.

**There are two schools of thought on layouts.**  The first is to put all your
layouts for all your modules into the ``app`` module's layout directory.
This consolidates all layouts in a single location.

The second school of thought is to put a layout directory into each custom
module which has its own layout[s].  This approach groups the layout
for components of the module into the module in which the components reside.
This may apply to the ``app`` module if you wish to create a layout[s] which
most appropriatly fits there.

Components like Nav and Footer are handled the Angular way by importing
them into a component template:

.. code-block:: html

  <app-nav></app-nav>


Routing
-------

Each module can have its own routing and is often defined in a file separate
from the ``custom-module.module.ts`` file.  See the ``app`` module's
``app-routing.module.ts`` as an example.

Within routing layouts are handled in a rather clever way.  By using child
routes a top level route can define a layout to be used for all child routes.
Defined in the ``app`` module's ``app-routing.module.ts`` file child routes
are grouped in a single Route (as defined in ``@angular/router``).

**It is important to note** that when layouts are imported from other modules
(for this example the ``CustomModule``) that does not cause the top-level
``app`` module to load the ``CustomModule`` from the server into the user's
browser at the time only ``app`` level routes are displayed.  This is important
for performance!  The ``CustomModule`` compiled ``.js`` file will only load
when a route internal to the module is requested.  That is, from the below
configuration, only when a route beginning with ``/custom`` is requested.

.. code-block:: ts

  use { CustomLayoutComponent } from './modules/custom/layout/custom-layout.component';

  {
    path: 'custom',
    component: CustomLayoutComponent,
    loadChildren: () =>
      import('./modules/custom/custom.module').then(m => m.CustomModule)
  }


When a route is called at ``/custom`` the ``CustomLayoutComponent`` is used
as a layout and handling of the routing is handed off to the CustomModule.
The ``CustomLayoutComponent`` has a ``<router-outlet></router-outlet>``:

.. code-block:: html

  <div [class]="theme">
    <div class="mat-app-background">
      <app-nav></app-nav>

      <div class="container">
        <router-outlet></router-outlet>
      </div>

      <app-footer (changeTheme)="onThemeChange($event)"></app-footer>
    </div>
  </div>


This ``<router-outlet></router-outlet>`` is used to display a route and
component defined in the routing of the ``CustomRoutingModule``:

.. code-block: ts

  export const routes: Routes = [
    {
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'projects/:id',
        component: ProjectDetailsComponent,
      }
    }
  ];

  @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
  })
  export class CustomRoutingModule { }


So the routes are ``/custom`` and ``/custom/projects/:id`` and they use
the CustomLayoutComponent for their layout.


Install
-------

::

  mkdir src/app/layout
  ng generate component layout/AppCustomLayout
  ng generate component layout/Header
  ng generate component layout/Footer


.. include:: footer.rst
