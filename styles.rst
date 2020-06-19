Styles Directory
================

`~/src/styles <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/styles>`_

The ``~/src/styles`` directory is used to store scss style sheets for the
application.  It can contain themes, Bootstrap, Angular Material, and any
other styles.

`~/src/styles.scss <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/styles.scss>`_
is installed in the default Angular skeleton.  It should
contain **@import** statments for all your global application scss files.
For instance it can import theme files stored in the ``~/src/styles``
directory.


Themes
------

The ``~/src/styles/themes`` directory should contain the application-wide
themes. This application includes two theme-files, `black-theme.scss` and
`light-theme.scss`.

A theme file generates the color-palette that composes the final theme and is
constructed of three main palettes: primary, accent and warn. These palettes
are defined using the `mat-palette` mixin, which accepts a mat-color and a
hue-number that represents different shades of the chosen color. In terms of
code, this is what we have:

.. code-block:: scss

  $my-black-primary: mat-palette($mat-grey, 700, 300, 900);
  $my-black-accent: mat-palette($mat-blue-grey, 400);
  $my-black-warn: mat-palette($mat-red, 500);

  $my-black-theme: mat-dark-theme(
    $my-black-primary,
    $my-black-accent,
    $my-black-warn
  );

The themes are included in the `styles.scss` file along with the `mat-core`
mixin, which adds the base styles to material components.

.. code-block:: scss

  @import '~@angular/material/theming';

  @import './styles/themes/black-theme.scss';
  @import './styles/themes/light-theme.scss';

  @include mat-core();

  .my-light-theme {
    @include angular-material-theme($my-light-theme);
  }

  .my-dark-theme {
    @include angular-material-theme($my-dark-theme);
  }

The downside here is that the approach above only will style material
components and not custom ones.

To achieve this, we've added a file called
``project-container.component.scss-theme.scss``. This file imports the material
theme and defines a mixin that styles the content with the appropriate color
values - pulling color-palettes from the theme.

.. code-block:: scss

  @import '~@angular/material/theming';

  @mixin my-project-container-component-theme($theme) {
    $accent: map-get($theme, accent);

    .active {
      color: mat-color($accent, default-contrast);
      background-color: mat-color($accent);

      &:hover {
        color: mat-color($accent, default-contrast);
        background-color: mat-color($accent);
      }
    }
  }

Then those files are referred to in the `styles.scss` files:

.. code-block:: scss

  @import 'app/modules/home/page/project-item/project-container.component.scss-theme.scss';

  @mixin custom-components-theme($theme) {
    // ...
    @include my-project-container-component-theme($theme);
  }

  .my-light-theme {
    // ...
    @include custom-components-theme($my-light-theme);
  }

  .my-dark-theme {
    // ...
    @include custom-components-theme($my-black-theme);
  }

The application content needs to be placed inside either a
``mat-sidenav-container`` element or have the ``mat-app-background`` class
applied to work. This application follows the last approach by appending this
class to the ``div`` that wraps the app-content in the
``src/app/layout/content-layout/content-layout.component.html`` file:

.. code-block:: html

  <div class="my-dark-theme">
    <div class="mat-app-background">
      <app-nav></app-nav>

        <div class="container">
          <router-outlet></router-outlet>
        </div>

      <app-footer></app-footer>
    </div>
  </div>

The height of the viewport the theme should affects is also defined:

.. code-block:: scss

  .mat-app-background {
    height: 100%;
  }

Bootstrap
---------

The ``~/src/styles`` directory can be used for compiling bootstrap and storing
other scss resources.  To install a custom bootstrap download the source files,
extract bootstrap into ``~/src/styles/bootstrap``, then modify the
``bootstrap/scss/_variables.scss``.  Include boostrap in the ``styles.scss``:

.. code-block:: scss

  @import './styles/bootstrap/scss/bootstrap.scss';

Install
-------

::

  mkdir src/styles

.. include:: footer.rst
