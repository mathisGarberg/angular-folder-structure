Path Alias
==========

Path aliases simplify paths by giving a link to the path rather than
using the the fully qualified path name.  Using them will make your code
easier to read and maintain.

Path aliases are relative to ``compilerOptions.baseUrl``.  By default this is
set to ``"./"`` so all path aliases we create must be fully qualified from the
``baseUrl``.


Create Aliases
--------------

This documentation uses a json program to modify the ``tsconfig.json`` file to
simplify editing for everyone.

Run this command to install the json program::

  npm install -g json

To create an alias run this command from your root application directory::

  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['src/app/core/*']"

The ``@app`` is the alias.  The path, ``src/app/core/*`` in this example, is the
path from the root ``compilerOptions.baseUrl`` directory to the directory you
would like to alias.

For json to be able to add paths to your tsconfig.json "paths" has to exist
under compilerOptions.  Else you get an error when running the commands to add
specific paths. "paths" can be added like this:

  json -f tsconfig.json -I -e "this.compilerOptions['paths'] = {}"

Recommended Aliases
-------------------

Recommended are aliases to `core <core.html>`_, `shared <shared.html>`_,
`modules <modules.html>`_ and ``environment``.  These aliases will
simplify your development::

  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['src/app/core/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@shared/*'] = ['src/app/shared/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@modules/*'] = ['src/app/modules/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@env'] = ['src/environments/environment']"

Note the alias for @env goes directly to the environment file.

Using Aliases
-------------

When you have aliases defined such as ``@shared`` you can shortcut your ``use``
statements by using the alias::

  import { SharedModule } from '../../shared/shared.module';

becomes::

  import { SharedModule } from '@shared/shared.module';

The environment ``@env`` alias to a file is used this way::

  import { environment } from '@env';


.. include:: footer.rst
