Default Directory Structure
===========================

This is the directory structure this repository recommends.  It is listed here
in one place as a reference.


About
-----

Inspired by the original blog post, this structure uses all the directory
structure parts and is a strait-forward installation.


Tree Structure
--------------

::

  .
  ├── e2e
  │   └── src
  ├── media
  └── src
      ├── app
      │   ├── core (@app)
      │   ├── data
      │   ├── layout
      │   ├── modules
      │   └── shared (@shared)
      ├── assets
      ├── environments (@env) [@env links to environment file]
      └── styles
          └── themes


Install
-------

These instructions are to install this directory structure to a brand new
``ng`` created application::

  mkdir media
  ng generate module Core
  ng generate module Shared
  ng generate module Data
  mkdir src/app/layout
  mkdir src/app/modules
  mkdir src/styles && mkdir src/styles/themes
  json --version || npm install -g json
  json -f tsconfig.json -I -c "this.compilerOptions.paths = {}"
  json -f tsconfig.json -I -e "this.compilerOptions.paths['@app/*'] = ['app/core/*']" \
    -e "this.compilerOptions.paths['@shared/*'] = ['app/shared/*']" \
    -e "this.compilerOptions.paths['@env/*'] = ['environment/*']"


.. include:: footer.rst
