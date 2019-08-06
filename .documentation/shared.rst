Shared Module
=============

The shared module contains classes and resources which are always loaded when the application is loaded and
which are shared between the main application and dynamically loaded modules.  By always loading with the
application the shared components are ready whenever a module requests them.

The shared module is a good place to import and export the ``FormsModule`` and the ``ReactiveFormsModule``.
It is also good for the ``FontAwesomeModule`` and any other resource used by some modules 
some of the time but not all modules all of the time.
