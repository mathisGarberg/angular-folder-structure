Core Module
===========

`~/src/app/core <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/app/core>`_

This module is the support system for the rest of the application.  Resources
which are always loaded such as route guards, HTTP interceptors, and
application level services such as the ThemeService in this application.  Other
app services such as logging go in this module.

This module is a good candidate for
`module aliasing <additional-resources.rst>`_ such as aliasing the module
to **@app**


Install
-------

::

  ng generate module Core


.. note::
  This is documentation For `angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>`_.
