<h1 align="center">React Setup Generator</h1>
<h3 align="center"3>A simple and flexible project setup for ReactJS</h3>

## Features

<dl>
  <dt>Customization</dt>
  <dd>Choose only those libraries that you want to use in your project</dd>
 
  <dt>Confortable developement</dt>
  <dd>All the necessary instruments such as HotRedbad, Redux, Dev tools, etc are all included and you can adjust them to your needs</dd>
  
  <dt>Production optimisation</dt>
  <dd>The files are minified for the production so that the app will be more productive and faster.</dd>
  
  <dt>Next Generation JavaScript</dt>
  <dd>Generate the project on either ES6 or TypeScript</dd>
  
  <dt>Styling (<i>optional</i>)</dt>
  <dd>There is an option to use either CSS preprocessor or Styled-component.  Also, you can use of the the CSS frameworks such as Bootstrap or Foundation.</dd>
  
  <dt>Testing (optional)</dt>
  <dd>Built in testing utilities for the whole project (Jest, etc)</dd>
  
  <dt>Style Guide (optional)</dt>
  <dd>Choose  and generate the necessary configuration of the static code check</dd>
  
  <dt>Component Development Tool</dt>
  <dd>Libraries like StoryBook and React Styleguideist allows to create a library of components and check the various state of each component.</dd>
</dl>

## Getting Started

### Installation 

Install it globally: 
```sh
[sudo] npm install -g react-setup-generator
```

### Generate the app

Create the directory and get into it: 
```sh
mkdir  my-project 
cd my -project
```
Run the generator
```sh
react-setup-generator
```
Choose the libraries and utilities you need. The installation of the selected ones will run automatically and the project is generated.

After  the installation ends you can start the project by:
```sh
npm start
```
To build the app for  production run the following command
```sh
npm run build
```
