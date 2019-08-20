Neolithic Directory Structure
=============================

This is an alternative to the primary directory structure this repoisotry
promotes.


About
-----

This directory structure corrects ``ng`` creation of all files inside the
``app`` directory.  The default ``ng`` structure forces all code to exist as a
subdirectory to ``app`` without giving a clear space for files which should
exist beneath the ``app`` dir.

This directory structure moves ``~/src/app`` to ``~/src/modules/app`` then
creates a symlink from ``~/src`` to ``~/src/app`` (not shown and hidden from
vscode) so ``ng`` will still place new files where they belong.  By moving
``app`` to a subdirectory of the ``modules`` it clears space for files which
truly belong under the ``app`` module.  This removes the requirement of a
``core`` module.

All modules exist in the same directory.  This removes the special handling
for the ``app`` module and flattens the modules.


Tree Structure
--------------

::

  .
  ├── e2e
  │   └── src
  ├── media
  └── src
      ├── assets
      ├── environments (@env) [@env links to environment file]
      ├── modules
      │   ├── app (@app)
      │   │   └── layout
      │   ├── data (@data)
      │   └── shared (@shared)
      └── styles
          └── themes


Install
-------

These instructions are to install this directory structure to a brand new
``ng`` created application::

  mkdir media
  mkdir src/module
  mkdir src/styles && mkdir src/styles/themes
  mv src/app src/module
  mkdir src/module/app/layout
  cd src && ln -s . app & cd .
  sed -i .bak 's/.\/app/.\/module\/app/g' src/main.ts
  ng generate module module/Shared
  ng generate module module/Data
  json --version || npm install -g json
  json -f tsconfig.json -I -c "this.compilerOptions.paths = {}"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['app/module/app/*']" \
    -e "this.compilerOptions.paths['@shared/*'] = ['app/module/shared/*']" \
    -e "this.compilerOptions.paths['@env/*'] = ['environment/*']" \
    -e "this.compilerOptions.paths['@data/*'] = ['app/module/data/*']"
  mkdir -p .vscode
  test -f .vscode/settings.json || echo "{}" > .vscode/settings.json
  json -f .vscode/settings.json -I -e "this['files.exclude'] = {'**src/app': true}"


Author
------

Tom H Anderson <tom.h.anderson@gmail.com>


.. note::
  This is documentation For `angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>`_.
