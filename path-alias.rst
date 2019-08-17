Path Alias
==========

Path aliases simplify paths by giving a link to the path rather than
using the the fully qualified path name.


Create Aliases
--------------

Run this command to install the json program which we will use to modify
``tsconfig.json``::

  npm install -g json

To create an alias run this command from your root application directory::

  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['src/app/core/*']"

The ``@app`` is the alias.  The path, ``src/app/core/*`` in this example, is the
path from the root directory to the directory you would like to alias.


Recommended Aliases
-------------------

Recommended are aliases to `core <core.html>`_, `shared <shared.html>`_, and
``environment``.  These aliases are not used in the example code in order to
stress new directory structures but their use will simplify your development::

  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['src/app/core/*']"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@shared/*'] = ['src/app/shared/*']"
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

.. note::
  This is documentation For `angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>`_.
