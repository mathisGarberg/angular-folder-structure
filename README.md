# Highly Scalable Angular Folder Structure
The project is inspired by an article I wrote on Medium called [How to define a highly scalable folder structure for your Angular project](https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7). The project is based on best practices from the community, other github Angular projects and my own experiences from working on several Angular projects. 

## Prerequisites
Before serving the project, you need to have Node version 8.9 and npm 5.5.1 or higher on your system. You can download the latest version of Node for your operating system on [Node's official site](https://nodejs.org/en/).

If you already have Node and npm installed, verify their version by running:

````
$ node -v # => displays the node version
$ npm -v # => displays npm version
````
Once you have Node installed, you can use the `npm` command to install TypeScript:

````
$ npm install -g typescript
````
You don’t technically need TypeScript, but it’s highly recommended by the Angular team, so I recommend you install it to make working with Angular as comfortable as possible.

Now that you have Node, npm and TypeScript installed, you can install the angular cli by running:

````
$ npm install -g @angular/cli
````

## Installing
You can install the projects dependencies by running

````
$ npm install
````
## Development server
Run `npm run start` for a dev server. The project will serve with the proxy a proxy flag by default. The proxy will highjack certain URLs, and send them to a specified backend server. You can avoid starting the project with proxy support by running `ng serve` instead.

## Scripts
npm start -> Run dev. server on http://localhost:4200/
npm run build -> Lint code and build app for production in dist folder
npm run test -> Run unit tests via Karma in watch mode
npm test:ci ->	Lint code and run unit tests once for continuous integration
npm run e2e ->	Run e2e tests using Protractor
npm run lint -> Lint code

## License
The MIT License (MIT)

Copyright (c) 2018 Mathis Garberg

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
