Structure Overview
==================

The angular-folder-structure project goal is to create a skeleton structure
which is flexible for projects big or small.

The Angular style guide has this to say on the subject of directory structure:

  Have a near-term view of implementation and a long-term vision. Start small
  but keep in mind where the app is heading down the road.

  All of the app's code goes in a folder named src. All feature areas are in
  their own folder, with their own NgModule.

  -- `Angular - Style Guide <https://angular.io/guide/styleguide#application-structure-and-ngmodules>`_

While such instructions are nice to hear they don't give real-world skeleton
exprience.  But we've taken this advice to heart to build our skeleton and
document all the parts in line with the official documentation.


Creating an Application
------------------------

Start your project using the ``ng`` command::

  ng new

You will be prompted for the project name.  Create a name in lower case with
dashes between the words like ``album-collection-organizer``

Next you will be asked to add **Angular Routing**.  We recommend you
select **Yes** (which is not the default).

Next you will be asked to select the **Style Sheet Format**.  We recommend you
select **SCSS**

``ng`` will now create a default skeleton applicaiton and install your vendors.


Adding Structure
----------------

The rest of this documentaion covers new structure which is built on top of
the ``ng`` generated skeleton.  Every part of ``angular-folder-structure`` is
optional so we suggest you review each part in this documentation to see if it
is appropriate for your project.


.. note::
  This is documentation For `angular-folder-structure <https://github.com/mathisGarberg/angular-folder-structure>`_.
