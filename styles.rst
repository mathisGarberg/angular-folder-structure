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

Themes are scss files inside ``~/src/styles`` which contiain all the scss for
a complete theme.  Included with this project is a ``dark-theme.scss`` and
a ``light-theme.scss``.


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
