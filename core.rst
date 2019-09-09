Core Module
===========

`~/src/app/core <https://github.com/mathisGarberg/angular-folder-structure/tree/master/src/app/core>`_

This module is for classes used by app.module.  Resources
which are always loaded such as route guards, HTTP interceptors, and
application level services, such as the ThemeService and logging belong in this
directory.

.. note::
  This module is recommended for a  `path alias <path-alias.html>`_
  to **@app**


Install
-------

::

  ng generate module Core


.. include:: footer.rst
