Shared Module
=============

`~/src/app/shared <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/app/shared>`_

The shared module contains classes and resources which are used in more
than one dynamically loaded module.  By always loading with the
application the shared components are ready whenever a module requests them.

The shared module is a good place to import and export the ``FormsModule``
and the ``ReactiveFormsModule``.  It is also good for the ``FontAwesomeModule``
and any other resource used by some modules some of the time but not all
modules all of the time.

.. note::
  This module is recommended for a  `path alias <path-alias.html>`_
  to **@shared**


Install
-------

::

  ng generate module Shared


.. note::
  This is documentation For `angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>`_.
