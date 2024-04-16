import React from "react";
import ReactDOM from "react-dom/client"
const newElement = React.createElement('div',{},'this is also a div');
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(newElement);

// the code we have written is not ready to be pushed to production
// we need to bundle our project before we push it to production

// create react app gives a readymade react production ready app

// react alone cannot make our app fast
// react needs the help of many other packages to get the stuff done

// npm is a package manager that comes with node js
// all the packages are hosted on the npm registory

// the packages on which our project is dependent on are called dependencies

// after doing npm init we get a package.json file into our project
// package.json is a configuration for our npm
// package.json manages the dependencies of our project

// the most important package in our project is our bundler
// a bundler packages our app so that it can be shipped to production
// create react app uses webpack bundler behind the scenes
// vite, parcel, webpack are all bundlers
// we will be using parcel

// installing parcel using the command npm install -d parcel
// we want parcel as a dev dependency

// a dev dependency is a dependency that is used in the development phase
// a normal dependency is a dependency that is used in the production phase

// initializing a node project using npm init

// installing react and react-dom as normal dependencies

// on installing a dependency we got a new file named package-lock.json 

// package-lock.json keeps the record of exact version of our dependencies

// we also got node_modules folder on installing dependencies
// node_modules contains all the code that we fetched from npm

// transitive dependencies
// dependencies of direct dependencies are called transitive dependencies (or in-direct dependencies)

// every dependency present in the node_modules folder has it's own package.json file

// what to push to git and what not
// node_moudles shouldn't (because all the dependencies can be installed be running npm install command) (if we have package.json and package-lock.json)
// package.json file should be pushed to git
// package-lock.json file should be pushed to git
// dist folder shouldn't be pushed to git
// .parcel-cache should'nt be pushed to git 

// node_modules can be re-generated using package.json and package-lock.json files
// everything that can be re-generated doesn't need to pushed to git

// igniting our app using the npx parcel index.html command

// parcel has created a server for us

// npx command is used for executing a package

// bts of npx parcel index.html
// parcel went to index.html and built a development built for us

// cdn links are not a good way
// to get react into our app

// hmr is not working because we are using the cdn links
// for using hmr we need to use the react and react-dom that we have installed from the npm

// we can also write npm i instead of npm install

// after installing react and react-dom we need to set the type of script to module
// then we need to import react and reactdom from the node_modules using the import statements 

// normal browse scripts cannot have imports and exports
// js modules can have imports and exports

// after this we have HMR (hot module replacement)

// what parcel does for us:
// - creates dev built
// - does HMR
// - creates a local server
// - comes with a file watching algorithm (which is written in c++) 
// - caches the builts (for faster builts)
// - does image optimization
// - does minification
// - will bundle our project
// - consistent hashing 
// - code splittingg
// - differential bundling
// - tree shaking
// - does diagnostics
// - allows us to host our project into https
// - different bundle for prod build

// prod built takes more time than dev build

// code for prod build
// npx parcel build index.html
// we get an error
// we need to remove the main from the package.json file

// differential bundling
// different bundles for differet browsers's different versions

// react alone cannot make our project fast
// it needs the help of other packages to make the project fast

// dist folder
// contains the bundled code (compressed and minified)

// .parcel-cache folder
// contains the cahced files of the built
// so that further builts are faster

// we can delete .parcel-cache, it will get regenerated again when running npm run start
// we can delete node_modules, we'll get it back again by the command npm install
// doing npm install installs all the dependencies of a projet

// HOMEWORK
// caret v/s tilde