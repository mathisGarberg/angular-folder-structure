Angular Folder Structure
========================

This project is an example of directory structure in an Angular application but it is also a working application.


Directory Structure
-------------------

Documentation is organized by the directories defined by this repository

~
  * `media <media.rst>`_
  * src

    * app 

      * `core <core.rst>`_
      * `data <data.rst>`_
      * `layout <layout.rst>`_
      * `module <module.rst>`_
      * `shared <shared.rst>`_

    * `theme <theme.rst>`_

Be sure to check our `additional resources <additional-resources.rst>`_ for further reading on how to improve access to and readability of your modules.


Demonstration Application
-------------------------

See this application running on our `demonstation application <https://mathisgarberg.github.io/angular-folder-structure/>`_


Installation
------------

You can install this application locally and run it.  Assuming you already have ``typescript``, ``npm``, and ``ng`` installed, clone this repository, cd to the directory and run ``npm install``

.. code-block::

  git clone https://github.com/mathisGarberg/angular-folder-structure.git
  cd angular-folder-structure
  npm install

Included with this package are some custom npm scripts.  Here is a list of npm run commands and their descriptions:

.. code-block::

  npm start     -> Run dev. server on http://localhost:4200/
  npm run build -> Lint code and build app for production in dist folder
  npm run test  -> Run unit tests via Karma in watch mode
  npm test:ci   -> Lint code and run unit tests once for continuous integration
  npm run e2e   -> Run e2e tests using Protractor
  npm run lint  -> Lint code


Run 
---

To run the application type ``ng serve`` then browse to `http://localhost:4200/ <http://localhost:4200/>`_
