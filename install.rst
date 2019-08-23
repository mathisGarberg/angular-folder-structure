Install Locally
===============

You can install this application locally and run it.  Assuming you already have
``typescript``, ``npm``, and ``ng`` installed, clone this repository, cd to the
directory and run ``npm install``::

  git clone https://github.com/mathisGarberg/angular-folder-structure.git
  cd angular-folder-structure
  npm install

Included with this package are some custom npm scripts.  Here is a list of
npm run commands and their descriptions::

  npm start     -> Run dev. server on http://localhost:4200/
  npm run build -> Lint code and build app for production in dist folder
  npm run test  -> Run unit tests via Karma in watch mode
  npm test:ci   -> Lint code and run unit tests once for continuous integration
  npm run e2e   -> Run e2e tests using Protractor
  npm run lint  -> Lint code


Run Locally
-----------

To run the application type ``ng serve`` then browse to
`http://localhost:4200/ <http://localhost:4200/>`_


.. include:: footer.rst
