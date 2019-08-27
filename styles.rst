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

Comes with pre-built themes out of the box. Generate code styles. Generate color
palettes that can be composed to an actual theme with base palette for dark and 
light. We need to call the mat-palette mixin with the base colors. Composition 
of multiple palettes. The hue value of strength. The mat-palette mixin takes
parameters to define a new theme.  The ``~/src/themes`` folder stores the 
application-wide themes. We have two themes included here, a light and a dark. 
A theme is consructed of a primary, accent and warn palette. The numbers 
represent different shaed of the chosen theme-color. a  composition of color 
palettes. We've created our theme with the `mat-light-theme` and `mat-dark-theme` 
functions, which means that our theme will have different shades of light and 
dark. In terms of code, this is what we've done:

.. code-block:: scss

  $my-black-primary: mat-palette($mat-grey, 700, 300, 900);
  $my-black-accent: mat-palette($mat-blue-grey, 400);
  $my-black-warn: mat-palette($mat-red, 500);

  $my-black-theme: mat-dark-theme(
    $my-black-primary,
    $my-black-accent,
    $my-black-warn
  );

When we've defined our theme(s), we need to include them in the `styles.scss` file.
Angular material provides many powerful SCSS mixins that does the work for us. The mixin
that generates material's core styles is `mat-core`. We need to call it.

.. code-block:: scss
  @import '~@angular/material/theming';

  @import './styles/themes/black-theme.scss';
  @import './styles/themes/light-theme.scss';

  @include mat-core();

  .my-light-theme {
    @include angular-material-theme($my-light-theme);
  }

  .my-dark-theme {
    @include angular-material-theme($my-black-theme);
  }

This will create our theme, but will only apply for Angular Material components, and not
our own. We can change that with a mixin-approach, where custom `scss-theme` files retrieve
colors with the `$theme` parameter. In addition to the themes, we also need our styled
component-themes like `project-container.component.scss-theme.scss`. The file contains the
We have colors contrastred. Same pattern to theme custom components. We have a ProjectContainerComponent.
Pull our the color palettes we're interested in. With map-get, we can access any value - pulling color
palettes from the theme. We can then start using the color values with the mat-color mixin. To create
a custom theme, we'll import Angular material and add the base styles. While there quite many 
components available, you will almost always need to style some custom components. When we want 
to customize a theme, we need to do two things. We'll need to create a file called 
<component-name>.scss-theme.scss. We can retreive particular colors using the `mat-color` function.
We can select default, lighter and darker shades as defined by the color of the palette.
It can also become useful to retrieve appropriate contrast colors when using the main color as 
the background. In that case, we can retrieve it using `mat-color($primary, lighter-contrast)`. 
We need to import the `mat-core` mixin that includes the styles that are used by the multiple 
components. We also need to define a theme data structure that will hold our multiple themes. 
You only need to point to the file in the. This file will look like this:

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

Then we've included this custom theme-component in the `styles.scss` file:

.. code-block:: scss

  @mixin custom-components-theme($theme) {
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

Both the custom component-theme and our light- and dark themes are added, but we still need to
apply the theme and add functionallity for switching between them. To theme our elements, we need
to set the theme class on the `overlayContainer`. Since certain components are inside global 
overlay container, an additional step is required for those components to be affected by the 
theme's class selector. 

.. code-block:: ts

  import { Injectable } from '@angular/core';
  import { Subject } from 'rxjs/Subject';
  import { Observable } from 'rxjs';

  @Injectable({
    providedIn: 'root'
  })
  export class ThemeService {
  private isDarkTheme: Subject<boolean>;

  constructor() {
    this.isDarkTheme = new Subject<boolean>();
    this.isDarkTheme.next(false);
  }

  setDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme.next(isDarkTheme);
  }

  getDarkTheme(): Observable<boolean> {
    return this.isDarkTheme;
  }

.. code-block:: ts

  import { ThemeService } from '@app/service/theme.service';
  // ...

  private overlayContainer: OverlayContainer;
  public theme = 'my-light-theme';

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    if (this.overlayContainer) {
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }

    this.themeService.getDarkTheme().subscribe(theme => {
      this.theme = (theme) ? 'my-dark-theme' : 'my-light-theme';

      if (this.overlayContainer) {
        const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
        const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
        if (themeClassesToRemove.length) {
          overlayContainerClasses.remove(...themeClassesToRemove);
        }
        overlayContainerClasses.add(this.theme);
      }
    });
  }

.. code-block:: html

  <div [class]="theme">
    <div class="mat-app-background">
      <app-nav></app-nav>

        <div class="container">
          <router-outlet></router-outlet>
        </div>

      <app-footer></app-footer>
    </div>
  </div>

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

.. note::
  This is documentation For `angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>`_.
